"use strict";
// 함수 범위이다. if, while 내에 정의해도 함수 범위 내에 있다면 사용 가능하다는 말.
var functionScopeVariable;
// {} 에 의해서 정의 범위가 갈린다.
let blockScopeVariable;
const blockScopeConstant = "notAllowedToChangeAfterDeclaration";
