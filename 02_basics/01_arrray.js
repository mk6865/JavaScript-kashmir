// arrray 

const myArr = [0,1,3,4,5, "hitesh","ture"];//its still array its not necessary to have one similar type of arrays

const myHeors = ["burhan", "zakir Musa"]
const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

// array methods
myArr.push(8);
myArr.push(192);
myArr.pop();// removes the last value
console.log(myArr);// add the value in the array



myArr.unshift(0);
myArr.unshift(2);// this operation will add the number in the begining and all the elements is shifted 
myArr.shift();
myArr.shift();// it will delete the element which are inserted in the begining;

console.log(myArr);


console.log(myArr.includes(9));// it will check wheather given parameter is present in the array it present return true
console.log(myArr.indexOf(8));// it will show you the index of the given element

const newArr = myArr.join();
console.log(myArr);
console.log( typeof newArr);




// slice method and splice method

console.log("A ", myArr);


const myn1 = myArr.slice(1,4);// first its includes but not last one
console.log(myn1);

const myn2  = myArr.splice(1,4);
console.log(myn2);// comman difference is it includes all element
console.log(myArr);
 

