function recursive (n){
    if(n==0){
        return 1;

    }else{
        return n *  recursive (n-1);
    }
}
console.log(recursive (10));