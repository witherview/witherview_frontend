import { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import moment from 'moment';

export default function useSockStomp({
  url = 'https://api.witherview.com/socket',
  roomId,
}) {
  const [chat, setChat] = useState([]);
  const [isConnectStomp, setIsConnectStomp] = useState(false);
  const client = useRef(null);

  const handleClick = (payload) => {
    console.log(payload);
    const sender = `${sessionStorage.getItem('name')} (${sessionStorage.getItem(
      'email',
    )})`;
    const newMessage = {
      type: 'COMMENT',
      roomId,
      sender,
      contents: payload,
    };
    client.current.send('/pub/chat', {}, JSON.stringify(newMessage));
  };

  useEffect(() => {
    client.current = Stomp.over(new SockJS(url));
    client.current.debug = null;
    client.current.connect(
      {},
      () => {
        setIsConnectStomp(true);
        client.current.subscribe(`/sub/room/${roomId}`, (data) => {
          const newMessage = JSON.parse(data.body);
          console.log(newMessage);

          const chatData = {
            time: moment(new Date()).format('HH:mm A'),
            name: newMessage.sender,
            content: newMessage.contents,
          };
          setChat((prev) => [...prev, chatData]);
        });
      },
      (err) => {
        console.error(err);
      },
    );
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
