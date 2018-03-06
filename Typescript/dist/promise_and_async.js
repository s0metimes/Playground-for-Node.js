"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
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
const async_1 = __importDefault(require("async"));
/*
    Async.series (순차 실행)

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



    *** 참고로 callback 은 void 를 return 하도록 해야한다.

    Internal modules : namespaces
    External modules : modules
*/
// Internal module : Series
var Series;
(function (Series) {
    // 예제
    Series.task1 = (callback) => {
        callback(null, "task1");
    };
    Series.task2 = (callback) => {
        callback(null, "task2");
    };
    Series.task3 = (callback) => {
        callback(null, "task3");
    };
})(Series || (Series = {}));
async_1.default.series([Series.task1, Series.task2, Series.task3], 
// results 가 string array 혹은 null 을
// 반환하기 때문에 any 로 써줘야한다.
function (err, results) {
    if (err) {
        console.log(new Error("FUCKKKKK"));
        return;
    }
    if (!results)
        return;
    console.log("Series: " + results.toString());
});
/*
    async.waterfall (순차 실행)
    
    dynamic programming 을 계획하고 실행하는 것에 최적일듯 싶다.
*/
var WaterFall;
(function (WaterFall) {
    WaterFall.task1 = (callback) => {
        callback(null, "a");
    };
    WaterFall.task2 = (arg1, callback) => {
        let a = arg1 + "WOW";
        let b = "how";
        callback(null, a, b);
    };
    WaterFall.task3 = (arg1, arg2, callback) => {
        let result = arg1 + arg2;
        callback(null, result); // 여기 result 가 곧 하단의 results 이다.
    };
})(WaterFall || (WaterFall = {}));
async_1.default.waterfall([WaterFall.task1, WaterFall.task2, WaterFall.task3], function (err, results) {
    if (err) {
        console.log(new Error("WATERFALLLLL"));
        return;
    }
    if (!results)
        return;
    console.log("WaterFall: " + results.toString());
});
/*
    async.parallel TODO: (동시 실행 : Round Robin 으로 실행하는 것이 아닐까?)
    
    사용 느낌은 async.series 와 동일하며, 먼저 끝난 result 가 완료 구문에서 실행된다.
*/
/**
 * 콜렉션과 비동기 동작
 *
 * 콜렉션에 들어가 있는 만큼 비동기가 동작하게 된다.
 *
 * EX.
 * 다수의 파일을 비동기 API 로 읽기
 * 다수의 파일을 비동기 API로 존재하는지 확인하기
 *
 * 이는 사이트를 좀 더 참고해서 확인해보자.
 */
/*
   async.each
*/
/*
async.each(array,
    (item, callback) => {
    // 배열 내 항목 item 을 사용하는 비동기 동작
    return callback();
    },
    (err) => {
    //async.each 완료
    
    if (err) return console.log(err);
    
    console.log("success");
    
});
*/
/**
 * Promise
 *
 * 비동기 동작의 흐름 제어. 모듈 설치가 필요 없음 (ES6에 추가).
 */
// Promise 객체 생성
new Promise(function () {
    // 비동기 동작
});
/**
 * Promise 상태
 *
 * pending: 동작 완료 전
 * fullfilled: 비동기 동작 성공
 * rejected: 동작 실패
 *
 *  성공적으로 완료 : fullfill 호출
 *  에러 상황 : reject 호출
 *
 * Promise 이후의 동작 : then
 *
 * (프로미스 객체).then(fullfilled, rejected) {
 *      function fullfilled(result) {
 *          // fullfilled 상태일 때의 동작
 *      }
 *      function rejected(err) {
 *          // rejected 상태일 때의 동작
 *      }
 * }
 */
// Promise 를 사용하는 태스크
let success = true;
let promiseTask = () => {
    return new Promise(function (fullfill, reject) {
        if (success)
            fullfill("success");
        else
            reject("error");
    });
};
let fullfilled = (result) => {
    console.log("Promise: " + result);
};
let rejected = (error) => {
    console.log("Promise: " + error);
};
promiseTask().then(fullfilled, rejected);
