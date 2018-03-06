/**
 * Comparing Type alias and Interface
 * 
 * 타입스크립트에서 제공하는 새로운 type 을 생성할 때 유용한 두가지 툴이다.
 */

// Type alias
type NewType = {
    arg1: number;
    arg2: string;
};

// Interface
interface NewType2 {
    arg1: number;
    arg2: string;
};

/*
    보다시피 위의 두 예시는 사실상 같은 역할을 해낼 수 있다.
*/
class Hey implements NewType, NewType2 {
    arg1: number;
    arg2: string;
    constructor() {
        this.arg1 = 0;
        this.arg2 = "yo";
    }
};  // 둘다 마치 interface 처럼 쓰인다.

type FunctionSpecification = {
    dudeFunc(arg1: any, arg2: any): any;
    dudeFunc2(arg2: any, arg1: any): any;
}

/*
    더욱 넓은 의미에서 사용될 수 있는건 Type Aliases 이다.

    아래 코드를 확인하자.
    type 은 그 작동원리가 마치 typedef 와 흡사하다.
 */
type Name = string; // 이 코드는 동작한다.
// interface Name2 = string;    // 이 코드는 동작하지 않는다.

/*
    Generic 도 마찬가지로 작동된다.
 */
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;

type GenericIdentityFn2 = {
    <T>(arg: T): T;
};

let myIdentity2: GenericIdentityFn2 = identity;

/*
    확장
 */
interface Plant {
    color: string;
    height: number;
}

interface Cactus extends Plant {
    spineCout: number;
}

type Plant2 = {
    color: string;
    height: number;
}

// 인터페이스는 확장이 용이하다.
interface Cactus2 extends Plant2 {
    
}
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