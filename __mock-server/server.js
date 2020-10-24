require('dotenv').config();
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const socket = require('socket.io');

const io = socket(server);

const users = {};

const socketToRoom = {};

io.on('connection', (sock) => {
  sock.on('join room', (roomID) => {
    if (users[roomID]) {
      const { length } = users[roomID];
      if (length === 4) {
        sock.emit('room full');
        return;
      }
      users[roomID].push(sock.id);
    } else {
      users[roomID] = [sock.id];
    }
    socketToRoom[sock.id] = roomID;

    const usersInThisRoom = users[roomID].filter((id) => id !== sock.id);

    sock.emit('all users', usersInThisRoom);
  });

  sock.on('sending signal', (payload) => {
    io.to(payload.userToSignal).emit('user joined', {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  sock.on('returning signal', (payload) => {
    io.to(payload.callerID).emit('receiving returned signal', {
      signal: payload.signal,
      id: sock.id,
    });
  });

  // 1:n 일 경우 특정 사람이 disconnect시 목록갱신 부분 업데이트 필요
  sock.on('disconnect', () => {
    // const roomID = socketToRoom[sock.id];
    // let room = users[roomID];
    // if (room) {
    //   room = room.filter((id) => id !== sock.id);
    //   users[roomID] = room;
    // }
    // io.emit('all users', room);
  });
});

server.listen(process.env.PORT || 8000, () => console.log('server is running on port 8000'));
