var http = require('http');

// options 의 줄임말이며, header 를 직접 설정해주게 된다.
var opts_post = {
    host: 'www.google.com',
    port: 80,
    method: 'POST',
    path: '/',
    headers: {}
};

var opts_get = {
    host: 'www.google.com',
    port: 80,
    path: '/'
};

var resData = '';
// request 라는 함수를 통해 타 서버에 요청을 보낸다.
var req = http.request(opts_get, function(res) {
    // 응답 처리
    res.on('data', function(chunk) {
        resData += chunk;
    });

    // 응답 처리가 끝났을 때
    res.on('end', function() {
        console.log(resData);
    });
});

opts_post.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = "q=actor";
opts_post.headers['Content-Length'] = req.data.length;

req.on('error', function(err) {
    console.log('오류 발생 : ' + err.message);
});

//요청 전송
req.write(req.data);
req.end();
