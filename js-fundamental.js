// Declaration Array

var names =['Tamim','sarkar','ittadi'];
console.log(names);

// Array new constraction

var company = new Array('GOogle','Microsoft','Yahoo');
console.log(company);

// Indexing
var cars =['volvo','bmw','mercedes'];
var indexingg = cars[1];
console.log(indexingg);

// OR

var cars=['volvo','BMW','Mercedes']

console.log(cars[0]);

// Replace Array Item
var fruits= ['Banana','Mango','Jack-fruit'];
fruits[1]='Blackberry';
console.log(fruits);

var number = [12,14,11,10];
var getString = number.toString();
console.log(getString);

// JOint By multiplication
var countries = ['Bangladesh','India','Bharat'];
var jointCountries = countries.join('*');
console.log(jointCountries);

// POP ARRAY ITEM

var fruits = ['apple','mango','strawberry'];

fruits.pop();

console.log(fruits);

// PUSH ARRAY ITEM

var fruits = ['apple','mango','jelly'];

fruits.push();
console.log(fruits);

// Shift ARRAY Item

var fruits = ['apple','mango','jelly'];

fruits.shift();
console.log(fruits);

// Unshift array

var fruits = ['apple','mango','jelly'];
fruits.unshift(12,'Ramim');
console.log(fruits);

// Changing item by index number

var fruits = ['apple','mango','jelly'];

fruits[1]='saimun';
console.log(fruits);
//Delete item by index nmbr

var fruits = ['apple','mango','jelly'];
delete fruits[1];
console.log(fruits);

//Concating Array
var fruits = ['apple','mango','jelly'];
var names = ['tamim','sarkar','kanil']
var newArray = fruits.concat(names);
console.log(newArray);

//step two

var fruits = ['apple','mango','jelly'];
var names = ['tamim','sarkar','kanil'];
var countries = ['bangladesh','india','bhutan']
var newAdded = countries.concat(fruits,names);
console.log(newAdded);

//step three


var names = ['tamim','sarkar','kanil'];

var added = names.concat('peter');
console.log(added);
