//find Low character word

function findLowerChar(names){
    var lower = names[0];
    for (var i=0;i<names.length;i++){
        var element = names[i];
        if(element<lower){
            lower=element;
        }
    }
    return lower;
}

var names=[12,13,14,15,15,354]
console.log(findLowerChar(names));