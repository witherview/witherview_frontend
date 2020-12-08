import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export default function useSockStomp({
  url = 'https://api.witherview.com/chat',
  roomId,
}) {
  const client = useRef(null);

  const handleClick = (payload) => {
    const sender = `${sessionStorage.getItem('name')} (${sessionStorage.getItem(
      'email',
    )})`;
    const newMessage = {
      // TODO: type을 추가해서 topic 안놔눠도 분기처리?
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
        client.current.subscribe(`/sub/room/${roomId}`, (data) => {
          const newMessage = JSON.parse(data.body);
          console.log(newMessage);
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
  };
}
