
var net = require('net');


var PORT = 100;

var server = net.createServer(function(socket) {

    console.log('server connected');
    console.log('remote - ' + socket.remoteAddress + ':' + socket.remotePort);
    console.log('local - '  + socket.localAddress  + ':' + socket.localPort);

    socket.write('connected with the socket server');

    socket.setTimeout(15000);

    socket.on('data', function(data) {

        console.log('server receive data');
        console.log('data: ', data);

    });

    socket.on('end', function() {

        console.log('server connection end');
    });

    socket.on('close', function() {

        console.log('server connection close');
    });

    socket.on('timeout', function() {

        console.log('server connection timeout');
    });

    socket.on('error', function() {

        console.log('server connection error');
    });

});

server.on('listening', function() {

    console.log('TCP socket server running on port ' + PORT);
});

server.on('close', function() {

    console.log('server close');
});

server.on('error', function(e) {

    console.log('server error:', e);
});

server.listen(PORT);

