"use strict";
/* Basic Types */
// Boolean
let bool = false;
// Number
let dec = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// String
let color = "blue";
color = 'red';
let multipleLiner = `Hello, 
    This is all 
    possible things.
    ${color}
    ${dec + 1}
    `;
// Array
let list = [1, 2, 3];
let list2 = [1, 2, 3];
// Above two are same thing.
// Tuple
let x;
x = ["hello", 3];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// Any
let notSure = 4;
// Void
let unusable = undefined; //undefined 만 가능.
// Null and Undefined
let u = undefined;
let n = null;
// Never
function err(message) {
    throw new Error(message);
}
err("안녕");
while (true)
    ;
