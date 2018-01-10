var fs = require('fs');

/**
    처음으로 promise 를 사용해봤다. 생각보다 사용법이 어렵지 않다.
    크게 추가된 코드도 없다.
    다른 언어에서 비동기 처리해주는 고생을 javascript 에서는 동기 처리해주는
    고생한다고 생각하면 딱히 손해도 아니다.
*/
var promise1 = function() {
    return new Promise(function(resolve, reject) {
        fs.readFile('README.md', 'utf8', function(err, data) {
            console.log(data);
            resolve('done');
        });
    });
};

var promise2 = function() {
    return new Promise(function(resolve, reject) {
        fs.writeFile('output.txt', 'Hell World!', function(err) {
            if(err) {
                // 보통은 return 처리를 해버린다고 한다.
                console.log("Error : " + err);
            }

            console.log('output.txt 파일에 데이터 쓰기 완료.');
            resolve('done');
        });
    });
};

promise1()
.then(function() { return promise2();})
.catch(function(err){ console.log("What is wrong?");})
.then(function() { console.log("All done successfully!");});


/*
 이외에도 open 을 이용하여 read, write 모드로 열고 파일 내용을 세세히 다룰 수 있다.
 혹은 stream 을 이용해서 파일 전달 그자체에 대해 다룰 수 있다.
*/
