// interface for function parameter
interface LabelledValue {
    size: number;
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.size + labelledObj.label);
}

let myObj = {size: 10, label: "works"};
printLabel(myObj);

// interface for function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return true;
}

// iterface for indexable types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// interface for class types
interface ClockInteface {
    currentTime: Date;
    constructor(hour: number, minute: number): any;
}

class Clock implements ClockInteface {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
    
}

