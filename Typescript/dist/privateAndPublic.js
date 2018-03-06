"use strict";
class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let student = new Student("Sihwan Oh");
console.log(student);
