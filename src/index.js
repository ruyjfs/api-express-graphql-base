import express from 'express';
import socket from 'socket.io'
import cors from 'cors';

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

import routes from './routes';

let app = express();

app.use(cors());
app.use(routes);

const port = process.env.PORT || 4000;
// app.listen(port, console.log(`Running a GraphQL API server at localhost:${port}/graphql`));
var io = socket.listen(app.listen(port));

const connectedUsers = {};

io.sockets.on('connection', function (socket) {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
    console.log(connectedUsers);

    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});


