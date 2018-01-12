var net = require('net');

// 새로운 TCP 혹은 IPC 서버 생성
// 주의 : 소켓을 만드는 것이 아니다. 소켓을 감싸 언제든 상대편 소켓을 받을 수 있는 서버를 만드는 것이다.
// 콜백함수의 인자인 client 는 client socket 을 말하며,
// 연결된 client 에게 행할 기능들을 정의하는 용도로 사용된다.
var server = net.createServer( function(client) {
    console.log('client: hello I am connected');
    client.on('end', function() {
        console.log('client disconnected');
        // 기본 모드에서는 클라이언트가 연결을 끊으면 client.end() 가 자동 호출된다.
    });

    client.write('hello client');
    // pipe(destination) 는 data 를 전송되는 stream 에서 읽어들이고 destination 으로
    // 데이터 stream 을 전송한다 (write stream 을 통해).
    // 즉, read from readStream and write by writeStream to destination.
    // client.pipe(client);

    client.on('data', function(data) {
        console.log('client: ' + data);
    });

    process.stdin.on('readable', function() {
        var chunk = process.stdin.read();
        if( chunk !== null ) {
            client.write(chunk.toString().substring(0, chunk.toString().length - 1));
        }
    });

}).on('error', function(err) {
    throw err;
});

// 서버를 열고, client 연결을 기다린다.
server.listen( {
    host: 'localhost',
    port: 8124,
    // TODO : @exclusive 는 무엇을 위한 것인가?
    exclusive: true
}, function() {
    console.log('opened server on', server.address());
});
