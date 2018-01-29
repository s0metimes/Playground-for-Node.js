// Express 기본 모듈 불러오기
var express = require('express'),
http = require('http'),
path = require('path');

// Express 의 기본 미들웨어들 불러오기
var bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
static = require('serve-static'),
errorHandler = require('errorHandler');

// 오류 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

var app = express();

app.get('/hey', function (req, res, next) {

    // baseUrl 의 값으로 아무것도 나오지 않는다. 왜지..??? 조사가 필요하다.
    console.log(req.baseUrl);
    console.log('Not finished');
    console.log('what if finished?');
    // res.end();

    next();
});

// Result: 라우터는 미들웨어와 동일하게 작동한다. http method 적용이 가능할뿐.
app.get('/hey', function (req, res, next) {
    console.log('Now this runs?');
    res.end();
});

app.listen(3000, function () {
    console.log('server is ready');
});
