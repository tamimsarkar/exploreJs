function animalCount(depth){
    var animal = 0;
    if(depth<=10){
        animal = depth *50;                 //Within 10 mile per mile have 50 animal
    }else if(depth<=20){
        firstPart = 10 *50;
        remainingPath = depth -10;
        secondPart = remainingPath *100;
        animal = firstPart +secondPart;
    }else{
        firstPart = 10 * 50;
        secondPart = 10 * 100;
        remainingPath = depth - 20;
        depthIn=remainingPath * 300;
        animal = firstPart + secondPart + depthIn;
    }
    return animal;
}
console.log(animalCount(7));
console.log(animalCount(11));
console.log(animalCount(32));