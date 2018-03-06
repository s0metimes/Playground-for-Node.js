
/* Basic Types */

// Boolean
let bool: boolean = false;

// Number
let dec: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

let multipleLiner = 
    `Hello, 
    This is all 
    possible things.
    ${ color }
    ${ dec + 1 }
    `;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// Above two are same thing.

// Tuple
let x: [string, number];
x = ["hello", 3];

// enum
enum Color {Red = 1, Green = 3, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;

// Void
let unusable: void = undefined; //undefined 만 가능.

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function err(message: string): never {
    throw new Error(message);
}

err("안녕");
while(true);


