# express 공식 사이트에서 제공하는 기본 서버 형식
express 공식 사이트에서 제공하는 서버 프레임워크의 형태이다.

## 실행 방법
DEBUG=myapp:* npm start

## 구조
    .
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.pug
        ├── index.pug
        └── layout.pug

    7 directories, 9 files

## 기본 라우팅
라우트 정의는 다음과 같은 구조가 필요하다.

    app.METHOD(PATH, HANDLER)

-   METHOD : HTTP METHOD
-   PATH : 서버에서의 경로
-   HANDLER : 라우트가 일치할 때 실행되는 콜백 함수

자세한 것은 router 폴더의 예제를 참고하길 바란다.

## subdomain 설정
node js 에서는 subdomain 을 위해 express-subdomain 이라는
라이브러리를 npm 을 통해 제공한다.

주소 : <https://www.npmjs.com/package/express-subdomain>
