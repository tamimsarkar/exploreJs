function fibonacci(n){
    var fibo= [0 , 1];
    for (i = 2; i<=n;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var result1 = fibonacci(10);
console.log(result1);
var result2 = fibonacci(11);
console.log(result2);
var result3 = fibonacci(12);
console.log(result3);
var result4 = fibonacci(13);
console.log(result4);

function fibonacci2(n){
    var fibo2 = [3 , 5 , 7 , 8];
    for(i = 4 ;i<=n;i++){
        fibo2[i] = fibo2[i-1] + fibo2[i-2];
    }
    return fibo2;
}
var result = fibonacci2(9);
console.log(result);

//Again

function myfibonacci (n){
    var fibo3 = [3,5,6,9,10];
    for (i = 5;i<=n;i++){
        fibo3[i] = fibo3[i-1] + fibo3[i-2];
    }
    return fibo3;
}
var lastResult = myfibonacci(22);
console.log(lastResult);


// again agian

fuction myfibo(n){
    var fibo = [3,6,54,63,5,3543,3533,5,353];
    for (i=1;i< )
}