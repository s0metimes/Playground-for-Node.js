"use strict";
/**
 * Comparing Type alias and Interface
 *
 * 타입스크립트에서 제공하는 새로운 type 을 생성할 때 유용한 두가지 툴이다.
 */
;
/*
    보다시피 위의 두 예시는 사실상 같은 역할을 해낼 수 있다.
*/
class Hey {
    constructor() {
        this.arg1 = 0;
        this.arg2 = "yo";
    }
}
; // 둘다 마치 interface 처럼 쓰인다.
function identity(arg) {
    return arg;
}
let myIdentity = identity;
let myIdentity2 = identity;
/* 이는 작동하지 않는다.
    type Cactus2 extends Plant2 {

    }
*/
/**
 * 결론: interface 는 확장성에 좋고,
 *      type alias 는 정적 타입 지정에 좋다. (typedef 처럼 쓰기 좋음)
 *
 * 여기서 우리 프로젝트에서의 의미를 명확히 하자.
 * interface : 기존 java 의 interface 와 흡사하게 사용한다.
 *             class 의 형식을 지정할 때 사용하도록 한다.
 *             또한, behavior 위주로 작성한다.
 *             즉, 함수 타입만 지정해 넣는다.
 *             또한, class 객체를 제외한
 *
 */ 
