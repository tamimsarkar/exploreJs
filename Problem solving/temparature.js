// celcius to fahrenheit

function toFahrenheit(celcius){
    var result = (celcius*9/5) +32;
    return result;
}
console.log(toFahrenheit(32));

// to celcius

function toCelcius (fahrenheit){
    var result = (fahrenheit-32)*5/9;
    return result;
}
var result2=toCelcius(100);
var result3=result2.toFixed(1);
console.log(result3 +' degree celcius.')

//Today Temparature

function toCelciuss (fahrenheit){
    var celcius ='Today Temparature is' + (fahrenheit-32)*5/9; +'degree celcius';
    return celcius;
}
var exactTemp = toCelcius(100);
var extractTemp = exactTemp.toFixed(2);
console.log(extractTemp);