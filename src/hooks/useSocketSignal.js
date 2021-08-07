import { useState, useEffect, useRef } from 'react';

import io from 'socket.io-client';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { get } from '@utils/snippet';

export default function useSocketSignal({ roomId, setStep }) {
  const [peers, setPeers] = useState([]);

  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef(new Map());
  const history = useHistory();

  const { email } = useSelector(get('auth'));

  const PEER_CONNECTION_CONFIG = {
    iceServers: [
      {
        urls: 'stun:stun.l.google.com:19302',
      },
    ],
  };

  useEffect(() => {
    console.log(peers);
  }, [peers]);

  const createPeer = (incomingSocketID, userMail, callerID, stream) => {
    const peer = new RTCPeerConnection(PEER_CONNECTION_CONFIG);

    peersRef.current.set(incomingSocketID, peer);

    peer.onicecandidate = ({ candidate }) => {
      if (candidate) {
        socketRef.current.emit('candidate', {
          candidate,
          candidateSendID: callerID,
          candidateReceiveID: incomingSocketID,
        });
      }
    };

    peer.oniceconnectionstatechange = (e) => {
      console.log(e);
    };

    peer.ontrack = ({ streams }) => {
      setPeers((prevPeers) =>
        prevPeers.filter((user) => user.id !== incomingSocketID),
      );
      setPeers((prevPeers) => [
        ...prevPeers,
        {
          id: incomingSocketID,
          eamil: userMail,
          stream: streams[0],
        },
      ]);
    };

    try {
      stream.getTracks().forEach((track) => {
        peer.addTrack(track, stream);
      });
    } catch (error) {
      alert(`no local stream: ${error}`);
    }

    return peer;
  };

  const socketConnection = () => {
    socketRef.current.on('all users', (users) => {
      users.forEach(async ({ id, email: userMail }) => {
        createPeer(
          id,
          userMail,
          socketRef.current.id,
          userVideo.current.srcObject,
        );

        const peer = peersRef.current.get(id);

        if (peer) {
          try {
            const sdp = await peer.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            });

            peer.setLocalDescription(new RTCSessionDescription(sdp));

            socketRef.current.emit('offer', {
              sdp,
              offerSendID: socketRef.current.id,
              offerSendEmail: userMail,
              offerReceiveID: id,
            });
          } catch (error) {
            alert(`create offer failed: ${error}`);
          }
        }
      });
    });

    socketRef.current.on(
      'getOffer',
      async ({ offerSendID, offerSendEmail, sdp: receiveSdp }) => {
        createPeer(
          offerSendID,
          offerSendEmail,
          socketRef.current.id,
          userVideo.current.srcObject,
        );

        const peer = peersRef.current.get(offerSendID);

        if (peer) {
          try {
            await peer.setRemoteDescription(
              new RTCSessionDescription(receiveSdp),
            );

            const sdp = await peer.createAnswer({
              offerToReceiveVideo: true,
              offerToReceiveAudio: true,
            });

            peer.setLocalDescription(new RTCSessionDescription(sdp));

            socketRef.current.emit('answer', {
              sdp,
              answerSendID: socketRef.current.id,
              answerReceiveID: offerSendID,
            });
          } catch (error) {
            alert(`error: ${error}`);
          }
        }
      },
    );

    socketRef.current.on('getAnswer', ({ answerSendID, sdp }) => {
      const peer = peersRef.current.get(answerSendID);

      if (peer) {
        peer.setRemoteDescription(new RTCSessionDescription(sdp));
      }
    });

    socketRef.current.on(
      'getCandidate',
      async ({ candidateSendID, candidate }) => {
        const peer = peersRef.current.get(candidateSendID);

        if (peer) {
          try {
            await peer.addIceCandidate(new RTCIceCandidate(candidate));
          } catch (error) {
            alert(`candidate failed: ${error}`);
          }
        }
      },
    );

    socketRef.current.on('user left', ({ id }) => {
      peersRef.current.get(id).close();
      peersRef.current.delete(id);
      setPeers((prevPeers) => prevPeers.filter((user) => user.id !== id));
    });

    socketRef.current.on('room full', () => {
      history.push('/peer-study');
    });

    socketRef.current.on('clicked', () => {
      setStep((prevStep) => prevStep + 1);
    });
  };

  const getStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      if (userVideo.current) userVideo.current.srcObject = stream;

      socketRef.current.emit('join room', {
        roomId,
        email,
      });
    } catch (error) {
      alert(`getUserMedia error: ${error}`);
    }
  };

  const connectToSocket = async (...func) => {
    try {
      socketRef.current = await io.connect('/', {
        transports: ['websocket'],
        path: '/socket',
      });
      if (socketRef.current) {
        func.forEach((eachFunc) => {
          eachFunc();
        });
      }
    } catch (error) {
      alert(`socket connect error: ${error}`);
    }
  };

  useEffect(() => {
    connectToSocket(getStream, socketConnection);
  }, []);

  return {
    userVideo,
    socketRef,
    peers,
  };
}
