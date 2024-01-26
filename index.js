"use strict";
//create a object representing a person with properties for name age address;
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
//example usage:
const johnDoe = new Person("John Doe", 30, "123Main Street");
console.log("Person details:", johnDoe);
