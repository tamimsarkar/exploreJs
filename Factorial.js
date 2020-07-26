// Function Factorial

var fact = 1;
function myFunction(value){
    for(var i = 1;i<=value;i++){
        fact = fact*i;
    }
    return fact;
}
console.log(myFunction(10));

// Loop Factorial

var factorial =1;
for (var i =1;i<=10;i++){
    factorial = factorial *i;
}
console.log(factorial);

// While Loop Factorial

var newFact = 1;
var i=1;
while(i<=10){
    newFact = newFact *i;
    i++;
}

console.log(newFact);
