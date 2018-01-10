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

    reader.on('close', function() {
        console.log('모든 라인 출력 완료했습니다.');
    });
}

var fileName = 'README.md';
processFileByLines(fileName);
