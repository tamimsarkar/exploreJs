function factorial(num){
    var fact = 1;
    for (var i = 1;i<=num;i++){
        fact=fact*i;            //or fact*=i
    }
    return fact;
}
console.log(factorial(5));

//Recursion way to create a factorial function

function recurFactorial(number){
 if(number == 0){
     return 1;
 }else if(number== 1){
     return 1;
 }else{
    return number * recurFactorial(number-1);
 }

}
console.log(recurFactorial(6));