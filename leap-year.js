function isleap(year){
   return (year % 100 === 0) ? (year % 400 ===0) : (year % 4 ===0);
    
}
console.log(isleap(2000));
function isleap(year){
    return (year % 100 === 0) ? (year % 4 ===0) : (year % 400 ===0);
     
 }
 console.log(isleap(1990));
 console.log(isleap(2090));
