import {
  useEffect, useState, useRef, useCallback,
} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Peer from 'simple-peer';
// TODO: 모멘트 말고 다른걸로 바꾸기 - already deprecated
import moment from 'moment';
import { set } from 'await-timeout';
import { v4 as uuidv4 } from 'uuid';

export default function useSockStomp({
  url = 'https://api.witherview.com/socket',
  roomId,
  setStep,
}) {
  const [isConnect, setIsConnect] = useState(false);
  const [peers, setPeers] = useState([]);
  const [myId, setMyId] = useState(uuidv4());
  const [yourId, setYourId] = useState('');

  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const otherPeer = useRef();

  const [chat, setChat] = useState([]);
  const client = useRef(null);

  const handleChatPublish = (payload) => {
    console.log('??');
    const sender = `${sessionStorage.getItem('name')} (${sessionStorage.getItem(
      'email',
    )})`;
    const newMessage = {
      // TODO: type을 추가해서 topic 안놔눠도 분기처리?
      type: 'COMMENT',
      roomId,
      sender,
      contents: payload,
    };
    client.current.send('/pub/chat', {}, JSON.stringify(newMessage));
  };

  const handleSignalPublish = ({ type, contents = '' }) => {
    console.log(type, contents);
    const sender = `${sessionStorage.getItem('name')} (${sessionStorage.getItem(
      'email',
    )})`;
    const newMessage = {
      // TODO: type을 추가해서 topic 안놔눠도 분기처리?
      type,
      roomId,
      sender,
      contents,
    };
    client.current.send('/pub/signal', {}, JSON.stringify(newMessage));
  };

  const handleType = (newMessage, stream, peer) => {
    console.log('****', newMessage.type);

    if (newMessage.type === 'aaaaaaa') {
      console.log('** callUser');
      const payload = JSON.parse(newMessage.contents);

      peer.on('stream', (otherStream) => {
        console.log('*stream');
        if (otherPeer.current) {
          otherPeer.current.srcObject = otherStream;
          console.log(otherStream);
        }
      });

      console.log('aa??', myId, payload.callerID);
      // const item = peersRef.current.find((p) => p.peerID === payload.callerID);
      // console.log('*item', item);
      // if (!item) {
      //   const peer = addPeer(payload.signal, payload.callerID, stream);
      //   peersRef.current.push({
      //     peerID: payload.callerID,
      //     peer,
      //   });
      //   return setPeers((users) => [...users, peer]);
      // }
    }

    if (newMessage.type === 'join') {
      console.log('bb??', myId, newMessage.contents);
      if (newMessage.contents !== myId) {
        console.log('**IN');
        peer.on('signal', (signal) => {
          console.log('signral');
          const newSignal = {
            callerID: newMessage.contents,
            myId,
            signal,
          };
          console.log('[[[[abc');
          handleSignalPublish({
            type: 'aaaaaaa',
            contents: JSON.stringify(newSignal),
          });
        });
        peer.signal(newMessage.contents);
        // peersRef.current.push({
        //   peerID: myId,
        //   peer,
        // });

        // return setPeers((users) => [...users, peer]);
      } else {
        handleSignalPublish({ type: 'join', contents: newMessage.contents });
      }
    }

    if (newMessage.type === 'disconnect') {
      console.log('disconnect--');
      setPeers([]);
      return setStep(0);
    }

    if (newMessage.type === 'click') {
      console.log('*click');
      return setStep((prev) => prev + 1);
    }

    return console.log('-_-_-_-');
  };

  useEffect(() => {
    console.log('####', myId, yourId, peers);
  }, [myId, yourId, peers]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(async (stream) => {
        client.current = await Stomp.over(new SockJS(url));
        client.current.debug = null;

        client.current.connect(
          {},
          () => {
            console.log('connected');

            userVideo.current.srcObject = stream;

            const peer = new Peer({
              initiator: true,
              trickle: true,
              stream,
            });

            setIsConnect(true);

            // handleSignalPublish({
            //   type: 'join',
            //   contents: myId,
            // });

            client.current.subscribe(`/sub/room/${roomId}`, (data) => {
              const newMessage = JSON.parse(data.body);
              console.log('chat', newMessage);

              const chatEach = {
                time: moment(new Date()).format('HH:mm A'),
                content: newMessage.contents,
              };

              return setChat((prev) => [...prev, chatEach]);
            });

            client.current.subscribe(`/sub/signal/${roomId}`, (data) => {
              const newMessage = JSON.parse(data.body);
              console.log('signal', newMessage);
              handleType(newMessage, stream, peer);
            });
          },
          (err) => {
            console.error(err);
          },
        );
      });
    return () => {
      handleSignalPublish({ type: 'disconnect' });
      client.current.disconnect();
    };
  }, []);

  return {
    client: client.current,
    handleSignalPublish,
    handleChatPublish,
    chat,
    isConnect,
    userVideo,
    peers,
    myId,
    otherPeer,
  };
}
