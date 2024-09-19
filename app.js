const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { Chess } = require('chess.js');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const chess = new Chess();
let players = {};
let currentPlayers = 'W';

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(8001, () => {
    console.log('Server started on port 3000');
});