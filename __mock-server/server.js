const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const socket = require('socket.io');

const io = socket(server, {
  path: '/socket',
  origins: ['http://localhost:3000', 'https://witherview-test.herokuapp.com/'],

  handlePreflightRequest: (req, res) => {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST',
      'Access-Control-Allow-Credentials': true,
    });
    res.end();
  },
});

const users = {};

const socketToRoom = new Map();

io.on('connection', (sock) => {
  sock.on('join room', ({ roomId, email }) => {
    if (users[roomId]) {
      const { length } = users[roomId];
      if (length === 6) {
        sock.to(sock.id).emit('room_full');
        return;
      }
      users[roomId].push({ id: sock.id, email });
    } else {
      users[roomId] = [{ id: sock.id, email }];
    }
    socketToRoom.set(sock.id, roomId);

    sock.join(roomId);

    console.log(`[${socketToRoom.get(sock.id)}]: ${sock.id} entered`);

    const usersInThisRoom = users[roomId].filter(({ id }) => id !== sock.id);

    console.log(usersInThisRoom);

    io.sockets.to(sock.id).emit('all users', usersInThisRoom);
  });

  sock.on('offer', ({
    offerReceiveID, sdp, offerSendID, offerSendEmail,
  }) => {
    sock.to(offerReceiveID).emit('getOffer', {
      sdp,
      offerSendID,
      offerSendEmail,
    });
  });

  sock.on('answer', ({ answerReceiveID, sdp, answerSendID }) => {
    sock.to(answerReceiveID).emit('getAnswer', { sdp, answerSendID });
  });

  sock.on('candidate', ({ candidateReceiveID, candidate, candidateSendID }) => {
    sock.to(candidateReceiveID).emit('getCandidate', {
      candidate,
      candidateSendID,
    });
  });

  sock.on('disconnect', () => {
    const roomId = socketToRoom.get(sock.id);

    if (roomId === undefined) {
      return;
    }

    sock.broadcast.emit('user left', { id: sock.id });

    socketToRoom.delete(sock.id);

    const room = users[roomId];

    if (room) {
      const filteredRoom = room.filter(({ id }) => id !== sock.id);

      users[roomId] = filteredRoom;

      if (filteredRoom.length === 0) {
        delete users[roomId];
      }
    }
  });

  sock.on('next', () => {
    if (
      users[socketToRoom.get(sock.id)]
      && users[socketToRoom.get(sock.id)].length <= 2
    ) {
      users[socketToRoom.get(sock.id)].forEach(({ id }) => {
        io.sockets.to(id).emit('clicked');
      });
    }
  });
});

server.listen(process.env.PORT || 8000, () => console.log('server is running on port 8000'));
