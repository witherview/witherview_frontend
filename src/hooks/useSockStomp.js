import { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import moment from 'moment';

export default function useSockStomp({
  url = 'http://api.witherview.com/socket',
  roomId,
}) {
  const [chat, setChat] = useState([]);
  const [isConnectStomp, setIsConnectStomp] = useState(false);
  const [header, setHeader] = useState({
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
  });
  const client = useRef(null);

  const handleClick = (payload) => {
    const newMessage = {
      type: 'COMMENT',
      studyRoomId: roomId,
      userName: sessionStorage.getItem('name'),
      message: payload,
    };
    client.current.send('/pub/chat.room', header, JSON.stringify(newMessage));
  };

  useEffect(() => {
    setHeader({
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    });
  }, [sessionStorage.getItem('accessToken')]);
  useEffect(() => {
    (async () => {
      client.current = await Stomp.over(new SockJS(url));

      // client.current.debug = null;

      await client.current.connect(
        header,
        () => {
          setIsConnectStomp(true);
          client.current.subscribe(
            `/sub/room.${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              console.log(newMessage);

              const chatData = {
                time: moment(new Date()).format('HH:mm A'),
                userName: newMessage.userName,
                message: newMessage.message,
              };
              setChat((prev) => [...prev, chatData]);
            },
            header,
          );
        },
        (err) => {
          console.error(err);
        },
      );
    })();

    return () => {
      client.current.disconnect();
    };
  }, [roomId, url]);

  return {
    client: client.current,
    handleClick,
    chat,
    isConnectStomp,
  };
}
