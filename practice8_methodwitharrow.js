// create a function to print hello world
// const printNew = () => {console.log('Hello World');}
// printNew();

//if you have only one statement inside {}
//it can be omitted
const printNew = () => console.log('Hello World');
printNew();

const sayHelloTo = (name) => console.log('Hello ' + name);
sayHelloTo('Janice');

const addNumbers = (num1, num2) => num1+num2;
console.log(addNumbers(100, 200));

const goToSleep2 = (homework, dishes) => {if(homework == 'Done' && dishes == 'Done'){
                                               console.log('Good night fellow student!');
                                               }
                                            }

goToSleep2('Done', 'Done');