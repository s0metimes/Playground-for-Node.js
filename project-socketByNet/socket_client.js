// 클라이언트
var net = require('net');
// net.Socket 을 만든다. 만들고 해당 포트에 연결시킨다.
var server = net.createConnection({ port:8124 }, function() {
    console.log('connected to server!');
});

// server 로부터 data 가 write 됐을 때
server.onI('data', function(data) {
    console.log('server: ' + data.toString().trim());
});

// 서버가 connection 을 종료했을 때
server.on('end', function() {
    console.log('disconnected from server');
});

// 콘솔에 입력(stdin) 했을 때
process.stdin.on('readable', function() {
    var data = process.stdin.read();
    if (data !== null) {
        // 서버로 data write 하기
        server.write(data.toString());
    }
});
