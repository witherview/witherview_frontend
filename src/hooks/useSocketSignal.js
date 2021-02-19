import { useState, useEffect, useRef } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';

export default function useSocketSignal({ roomId, setStep }) {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef(new Map());

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
    socketRef.current = io.connect('http://localhost:8000');

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;

        socketRef.current.emit('join room', roomId);

        socketRef.current.on('all users', (users) => {
          setPeers([]);
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.put(
              userID,
              peer,
            );
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on('user joined', (payload) => {
          const item = peersRef.current.get(payload.callerID);
          if (item === undefined) {
            const peer = addPeer(payload.signal, payload.callerID, stream);
            const userId = payload.callerID;
            peersRef.current.put(
              userId,
              peer,
            );
            setPeers((users) => [...users, peer]);
          }
        });

        socketRef.current.on('receiving returned signal', (payload) => {
          const signalSenderId = payload.id;
          const item = peersRef.current.get(signalSenderId);
          if (item !== undefined) {
            item.peer.signal(payload.signal);
          }
        });

        // 누군가가 방을 떠났다는 메시지를 받았을 때
        socketRef.current.on('user left', (leftSocketId) => {
          // 떠난 유저를 제외한 나머지 배열을 반환한 뒤 setPeers로 다시 세팅
          if (peersRef.has(leftSocketId)) {
            peersRef.delete(leftSocketId);
          }
          // 연결한 peer connection 삭제
          const remainingUsers = peers.filter((user) => {
            if (user.peerID === leftSocketId) {
              user.peer.destroy();
              return undefined;
            } return user;
          }).map((user) => user !== undefined);

          setPeers(remainingUsers);
        });

        socketRef.current.on('refresh', () => {
          setPeers([]);
          setStep(0);
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
