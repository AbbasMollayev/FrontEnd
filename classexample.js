class Person{
    //this is fields||properties
    firstName;
    lastName;
    //constructor
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //this is how we create method|function
    //inside the class
    printFullName(){
        console.log('Full name is ' + this.firstName + ' ' + this.lastName);
    }

    getUpperCaseFirstName(){
        return this.firstName.toUpperCase();
    }
}

let p1 = new Person('Jon','Snow');
// p1.firstName = 'Jon';
// p1.lastName = 'Snow'; ---------> This is how we just create fields of an object without constructor
console.log(p1);
p1.printFullName();
console.log(p1.getUpperCaseFirstName());