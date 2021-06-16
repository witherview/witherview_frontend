import { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import moment from 'moment';

const HEADER = {
  Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
};

export default function useSockStomp({
  url = 'http://api.witherview.com/socket',
  roomId,
}) {
  const [chat, setChat] = useState([]);
  const [isConnectStomp, setIsConnectStomp] = useState(false);
  const client = useRef(null);

  const handleClick = (payload) => {
    const newMessage = {
      type: 'COMMENT',
      roomId,
      sender: sessionStorage.getItem('name'),
      contents: payload,
    };
    client.current.send('/pub/chat.room', HEADER, JSON.stringify(newMessage));
  };

  useEffect(() => {
    (async () => {
      client.current = await Stomp.over(new SockJS(url));

      // client.current.debug = null;

      await client.current.connect(
        HEADER,
        () => {
          setIsConnectStomp(true);
          client.current.subscribe(
            `/sub/room.${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              console.log(newMessage);

              const chatData = {
                time: moment(new Date()).format('HH:mm A'),
                name: newMessage.sender,
                content: newMessage.contents,
              };
              setChat((prev) => [...prev, chatData]);
            },
            HEADER,
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
