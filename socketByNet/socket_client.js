var net = require('net');

// net.Socket 을 만든다. 만들고 해당 포트에 연결시킨다.
var client = net.createConnection({ port:8124 }, function() {
    console.log('connected to server!');
});

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        client.write(chunk.toString().substring(0, chunk.toString().length - 1));
    }
});

// data 를 받았을 때 실행됨.
client.on('data', function(data) {
    console.log('server: ' + data.toString());
});

client.on('end', function() {
    console.log('disconnected from server');
});
