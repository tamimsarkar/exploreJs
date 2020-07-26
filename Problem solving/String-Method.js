var names = 'Tamim,Sarkar,ittadi';
var name=names.slice(7,12);
console.log(name);

//String Replace

var names = 'tamim , sarkar , upgrade, he is a graphic designer';
var renames= names.replace('graphic designer','Web developer');
console.log(renames);

//char at

var names = 'Tamim sarkar';
var name = names.charAt(2);

console.log(name);

//Split

var names=  'Tamim Sarkar attitude';
var renames = names.split('|');
console.log(renames);

//split

var names='Tamim sarkar attitude';
var arr= names.split(',');
var text= '';
for(var i= 0;i<arr.length;i++){
    text += arr[i];
}
console.log(text);

