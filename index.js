'use strict';
const EventEmitter = require('events');
const io = require('socket.io-client');
const socket = io("https://msgroom.windows96.net");
const test = null
const ConnectInfo = "Connected!"
module.exports = {
  EventEmitter: EventEmitter,
  io: io,
  socket: socket,
  test: test,
  ConnectInfo: ConnectInfo,
};