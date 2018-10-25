var socket;

function setup() {
    // connect to the server
    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    // noStroke();
    // fill(255, 0, 100);
    // ellipse(data.x, data.y, 36, 36);
    $('#dataMouse').append(data);

}

function storeData()
{

var data = 12;
// send in commandPromt
socket.emit('mouse', data);


}

function draw(){

}