var express = require('express'),
http = require('http'),
path = require('path');

var router = express.Router();

var bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
static = require('serve-static'),
errorHandler = require('errorhandler');

var expressErrorHandler = require('express-error-handler');

var expressSession = require('express-session');

var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser 를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// body-parser 를 사용해 application/json 파싱
app.use(bodyParser.json());

// public 폴더를 static 으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

// 로그인 라우팅 함수 - 데이터베이스의 정보와 비교
router.route('/process/login').post(function(req, res) {
    console.log('/process/login 호출됨.');
});

// 라우터 객체 등록
app.use('/', router);

//===== 404 오류 페이지 처리 =====//
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);


//===== 서버 시작 =====//
http.createServer(app).listen(app.get('port'), function() {
    console.log('서버가 시작되었습니다. 포트: ' + app.get('port'));
});
