/**
 * 파일의 내용을 한줄씩 읽어 출력하는 기능
 *
 * 외장 모듈 : fs, readLine
 * 읽어들일 파일 : README.md
 */

// 파일에 관해 다룰 때 사용하는 모듈.
var fs = require('fs');
// 한줄씩 읽어올 때 쓰는 모듈.
var readline = require('readline');

/*
    파일에서 한줄씩 읽어옵니다.
*/
function processFileByLines(fileName) {

    var reader = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout
    });

    var count = 0;

    // 읽어왔을 때의 이벤트 처리.
    reader.on('line', function(line) {
        console.log('라인 ' + (count+1) + ' : ' + line + '\n');
        count++;
    });

    // reader 가 모두 읽어들이고 닫혔을 때의 이벤트 처리.
    reader.on('close', function() {
        console.log('모든 라인 출력 완료했습니다.');
    });
}


// 파일 이름 설정.
var fileName = 'README.md';
// 함수 실행.
processFileByLines(fileName);
