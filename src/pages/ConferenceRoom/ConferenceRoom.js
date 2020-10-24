import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';

import PeerVideo from './PeerVideo';

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
`;

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`;

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

export default function ConferenceRoom({ match }) {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const { roomID } = match.params;

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
    socketRef.current = io.connect('localhost:8000');

    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;

        socketRef.current.emit('join room', roomID);

        socketRef.current.on('all users', (users) => {
          const getPeers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            getPeers.push(peer);
          });
          setPeers(getPeers);
        });

        socketRef.current.on('user joined', (payload) => {
          const item = peersRef.current.find(
            (p) => p.peerID === payload.callerID,
          );
          if (!item) {
            const peer = addPeer(payload.signal, payload.callerID, stream);
            peersRef.current.push({
              peerID: payload.callerID,
              peer,
            });
            setPeers((users) => [...users, peer]);
          }
        });

        socketRef.current.on('receiving returned signal', (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });

        // 1:n 일 경우 특정 사람이 disconnect시 목록갱신 부분 업데이트 필요
        socketRef.current.on('when disconnect', () => {});
      });
  }, []);

  return (
    <Container>
      <StyledVideo muted ref={userVideo} autoPlay playsInline />
      {peers ? (
        // eslint-disable-next-line react/no-array-index-key
        peers.map((peer, index) => <PeerVideo key={index} peer={peer} />)
      ) : (
        <></>
      )}
    </Container>
  );
}

ConferenceRoom.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

ConferenceRoom.defaultProp = {
  match: {},
};
