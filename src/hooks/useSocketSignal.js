import { useState, useEffect, useRef } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

export default function useSocketSignal({ roomId, setStep }) {
  const [peers, setPeers] = useState([]);

  // useEffect로 마운트 실행시 socket.on에서 useState로 바뀐 상태를 가져오지 못하는 문제가 있어서 아래와 같이 처리
  // TODO: 더 좋은 방법이 있다면 그것을 사용
  const peersStateTempRef = useRef();
  useEffect(() => {
    peersStateTempRef.current = peers;
  }, [peers]);

  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef(new Map());
  const history = useHistory();

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: true,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: true,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  useEffect(() => {
    socketRef.current = io.connect('/', {
      transports: ['websocket'],
      path: '/socket',
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;

        socketRef.current.emit('join room', roomId);

        socketRef.current.on('all users', (users) => {
          setPeers([]);
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.set(userID, peer);
            peers.push({ userID, peer });
          });
          setPeers(peers);
        });

        socketRef.current.on('room full', () => {
          history.push('/peer-study');
        });

        socketRef.current.on('user joined', (payload) => {
          const item = peersRef.current.get(payload.callerID);
          if (item === undefined) {
            const peer = addPeer(payload.signal, payload.callerID, stream);
            const userID = payload.callerID;
            peersRef.current.set(userID, peer);
            setPeers((users) => [...users, { userID, peer }]);
          }
        });

        socketRef.current.on('receiving returned signal', (payload) => {
          const signalSenderId = payload.id;
          const item = peersRef.current.get(signalSenderId);
          if (item !== undefined) {
            item.signal(payload.signal);
          }
        });
        // 누군가가 방을 떠났다는 메시지를 받았을 때
        socketRef.current.on('user left', (leftSocketId) => {
          // 떠난 유저를 제외한 나머지 배열을 반환한 뒤 setPeers로 다시 세팅
          if (peersRef.current.get(leftSocketId) !== undefined) {
            peersRef.current.delete(leftSocketId);
          }
          // 연결한 peer connection 삭제
          const remainingUsers = peersStateTempRef.current
            .filter((user) => {
              if (user.userID === leftSocketId) {
                return undefined;
              }
              return user;
            });

          setPeers(remainingUsers);
        });

        // TODO: stomp 시그널링과 분리해서 stomp topic에 추가
        socketRef.current.on('clicked', () => {
          setStep((prev) => prev + 1);
        });
      });
  }, []);

  return {
    createPeer,
    addPeer,
    userVideo,
    peersRef,
    socketRef,
    peers,
  };
}
