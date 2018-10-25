
var express = require('express');

var app = express();
// building our own port
var server = app.listen(3000);

app.use(express.static('public'));

console.log('My socket.io is on running');

// connection with client from server
var socket = require('socket.io');

var io = socket(server);

 // new connection
io.sockets.on('connection', newConnection);
function newConnection(socket){
    console.log('new Connection' + socket.id);
    //console.log(socket);
    //receive from client
   socket.on('mouse', mouseMsg);

   // function receive messanger
   function mouseMsg(data){

        socket.broadcast.emit('mouse', data);
    
       // io.sockets.emit('mouse', data);
    //console.log(data);
   }
   

}


