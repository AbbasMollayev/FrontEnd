let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
//store the firs item and second item into a variable

// let firstItem = names[0];
// let secondItem = names[1];

//this is called destructing
//below code will take the first item and second item in names array
//and assign it to a variable called firstItem, secondItem
let [firstItem, secondItem, x , , fifthValue ] = names;
//if you wanted to get 1st, 3rd, 4th item
//let [a, ,b, c] = names; //a(Clark) b(Barry) c(Diana)

console.log(firstItem);
console.log(secondItem);
console.log(x);
console.log(fifthValue);

console.log('-----------');
//you may also use destructing for object
//to store the value of the fields in one shot
let c1 = {
    make: 'Tesla',
    model: 'X',
    year: 2023,
    color: 'white'
}
//store the value of name and color into 2 variables
//let make = c1.make;
//let color = c1.color;
let{make,color,year} = c1;
console.log(make);
console.log(color);
console.log(year);

