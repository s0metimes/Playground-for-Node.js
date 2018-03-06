"use strict";
// interface 는 컴파일되면 js에는 노출되지 않는다.
// 하지만 Type check 해주는데 매우 큰 도움을 준다.
class CollegeStudent {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let 으로 선언된 변수는 변수가 선언된 블록 내에서만 유효.
// var 으로 선언된 변수는 함수 블록 이외의 블록은 무시.
// let 은 재선언 불가능이다. var 은 가능.
let user = new CollegeStudent("Jane", "M.", "User");
// const 는 let 과 비슷하나 변수에 재할당 불가능하다.
const hello = "hello";
// 요약하면 var 과 let, const 의 차이는 scope, 재선언 불가능 차이.
// let 과 const 의 차이는 재할당 가능 불가능 차이.
console.log(greeter(user));
/**
 * Compile 오류가 나더라도 일단 ja 파일은 만들어진다.
 * 다만, 예상한대로 작동하는지를 예측할 수 없을 뿐이다.
 */
// 중복 함수 라는 버그가 났었는데 tsc --init 을 사용해서
// tsconfig.js 파일을 만들면 해결되는 것으로 보인다.
