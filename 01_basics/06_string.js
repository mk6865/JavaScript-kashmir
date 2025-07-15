//modern syntax 
const name = "hitesh"
const repoCount = 50;


console.log(name + repoCount + "value");

console.log(`hello my name ${name}  and my rep count is ${repoCount}`)
// string manipulation
//how to declare string
const gameName = new  String('Momin Khan-hc')


console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0,3);
console.log(newString);


const anotherString = gameName.slice(-7,4);// we can give the negative values
console.log(anotherString);
// now 

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());// it removes the white space in the text box


const url = "https://momin.com%20 choudary";

console.log(url.replace('%20','_'));

console.log(url.includes('sunder'));
console.log(url.includes('khan'));

const xyz = "momin_khan_momin_junaid";
console.log(xyz.split('_'));

