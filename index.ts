//create a object representing a person with properties for name age address;
class Person{
    constructor(public name:string,public age:number,public address:string) {}
}
//example usage:
const johnDoe:Person = new Person("John Doe",30,"123Main Street");
console.log("Person details:",johnDoe);