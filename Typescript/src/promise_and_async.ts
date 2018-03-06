/*
* Async *

비동기 동작의 흐름 제어를 위한 외부 모듈이다.
타 언어에서 concurrency 를 중요하게 다루는 만큼 중요하다.

설치: npm install --save async

> Async 의 기능
    1. 행위 순서 제어
        - series
        - seriesEach
        - waterfall
        - parallels
    2. 콜렉션
        - each
        - forEachOf
        - map
        - filter
*/
import async from "async";

/*
    Async.series {
       [ 태스크1, 태스크2, 태스크3... ],
       완료 콜백(err, results) { }
    };
    
    태스크 :
    function(callback) {
        // 태스크 성공
        callback (null, result);
        
        ...or...
        
        // 태스크 실패
        callback (err, null);
    }

    완료 콜백 :
    function(err, results) {
        if (err) {
            // 에러처리
            return;
        }
        // 성공
        // results 에는 각 태스크들의 결과 값이 들어있다.
    }
*/

interface CallbackInterface {
    (err: Error | null, result: string | null): void;
}

// 예제
let task1 = (callback: CallbackInterface) => {
    callback(null, "task1");
}

let task2 = (callback: CallbackInterface) => {
    callback(null, "task2");
}

let task3 = (callback: CallbackInterface) => {
    callback(null, "task3");
}

async.series(
    [
        task1,
        task2,
        task3
    ],
    // results 가 string array 혹은 null 을
    // 반환하기 때문에 any 로 써줘야한다.
    function(err: any, results: any) {
        if ( err ) {
            console.log(new Error("FUCKKKKK"));
            return;
        } 
        console.log(results.toString());
        
    }
);