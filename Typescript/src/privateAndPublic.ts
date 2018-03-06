class Student {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let student: Student = new Student("Sihwan Oh");

console.log(student);
