function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci (n-2);
    }
    
}
var result = fibonacci(11);
console.log(result);

// again

function recursive(n){
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return recursive(n-1) + recursive(n-2);
    }
}
var reNew =recursive(11);
console.log(reNew);