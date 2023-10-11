'use strict';
// that is library file, not bot file
const EventEmitter = require('events');
const io = require('socket.io-client');
const socket = io("https://devel.windows96.net:4096");
const test = null
const ConnectInfo = "Connected!"
const sourceMap = require('./index.js.map');
module.exports = {
  EventEmitter: EventEmitter,
  io: io,
  socket: socket,
  test: test,
  ConnectInfo: ConnectInfo,
  sourceMap: sourceMap,
};