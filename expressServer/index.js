// 옛날방식
//
// var express = require('express'),
// http = require('http');
//
// var app = express();
//
// app.set('port', process.env.PORT || 3000);
//
// http.createServer(app).listen(app.get('port'), function() {
//     console.log('익스프레스 서버를 시작했습니다 :' + app.get('port'));
// });

// express 홈페이지에 기재된 방식
var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('Example app listening on port %d!', port);
});
