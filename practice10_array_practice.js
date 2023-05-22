let prices = [17,87,54,85,10]; 

// prices.forEach(each => console.log(each));

// prices.forEach(each => {
//     console.log(each);
//     console.log('This is another line');
// })

// function processItem (message){
//     console.log(message);
//     console.log('This is another line');
// } 

// processItem('Hello World');
// processItem(12);
//processItem(16);

const processItem = (message) => {
    console.log(message);
    console.log('This is another line');
}

prices.forEach(processItem);

//create a new array with each number doubled from prices array
let doubledPrices = prices.map(each => each*2);
console.log(doubledPrices);

let tagPrices = prices.map(each => 'price is ' + each);
console.log(tagPrices);

let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
//transform this array to get new array of json Object
// let firstObj = {
//     firstName : "Clark" --------> example of hard code
// };
let myNames = [];

for(let each of names){
     let myObj = {
       firstName : each
    };
    myNames.push(myObj);
}
console.log(myNames);

console.log('----------------');

let myCoolNames = names.map(each => {
    return {
        firstName: each
    }
}); 
console.log(myCoolNames); 

