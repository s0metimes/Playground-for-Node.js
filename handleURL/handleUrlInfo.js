var url = require('url');
var querystring = require('querystring');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

// 요청 파라미터 구분하기
var param = querystring.parse(curURL.query);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

// 뒤에 적힌 where 가 parameter 변수명이다.
console.log('요청 파라미터 중 query의 값 : %s', param.where);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
