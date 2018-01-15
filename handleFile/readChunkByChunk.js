var http = require('http');
var fs = require('fs');

var server = http.createServer();
var port = 3000;
var count = 0;

server.listen(port, function() {
    console.log('웹 서버 시작. port : %d', port);
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청. %d', count);

    var filename = 'house.png';
    var infile = fs.createReadStream(filename, {flags: 'r'});
    var filelength = 0;
    var curlength = 0;

    // file 총 길이 불러오는 기능인가보다.
    fs.stat(filename, function(err, stats) {
        filelength = stats.size;
    });

    // 헤더 쓰기
    res.writeHead(200, {"Content-Type" : "image/png"});

    // 파일 내용을 스트림에서 읽어 본문 쓰기
    // chunk 에는 2^16 만큼 채우는 방식이였다.
    infile.on('readable', function() {
        var chunk;
        while (null !== (chunk = infile.read())) {
            console.log('읽어 들인 데이터 크기 : %d 바이트', chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf8', function(err) {
                if(curlength >= filelength) {
                    // 응답 전송하기
                    res.end();
                    count++;
                }
            });
        }
    });
});
