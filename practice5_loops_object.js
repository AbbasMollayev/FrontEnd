let car = {
    make: 'Tesla',
    model: 'X',
    year: 2023,
    color: 'white'
}

// print out the make
// yourObjectName.thePropertyName
console.log(car.make);
//or yourObjectName["thePropertyName"]
console.log(car["make"]);

// looping through the object key|property|field
for (let eachKey in car){
    console.log("the key name " + eachKey);
    console.log(car[eachKey]);
}



