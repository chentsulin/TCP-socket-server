
var net = require('net');


var PORT = 4500;

var server = net.createServer(function(socket) {

    console.log('server connected');
    console.log('remote - ' + socket.remoteAddress + ':' + socket.remotePort);
    console.log('local - '  + socket.localAddress  + ':' + socket.localPort);

    socket.write('connected with the socket server');

    socket.on('data', function(data) {

        console.log('data: ', data);

    });

    socket.on('end', function() {

        console.log('server connection end');
    });

    socket.on('close', function() {

        console.log('server connection close');
    });

    socket.on('error', function() {

        console.log('server connection error');
    });

}).listen(PORT);

console.log('TCP socket server running on port ' + PORT);