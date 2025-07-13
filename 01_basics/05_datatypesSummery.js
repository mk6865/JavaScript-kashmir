// primitive and non primitive
// primitive is call by value
// non primitive is call by reference


//primitive
// 7 types: String ,Number,Boolean , null,undefined,Symbol,BigInt **** primitive
const score = 100; // its dynamical typed language
const scoreValue = 100.3 // it not special it category is number only
const isLoggedIn = false
const outsideTemp = null // it means emptty
let userEmail; // its value is now undefined
console.log(userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id, anotherId);
console.log(id == anotherId);// output will come to false because its sysmbol they are different they are not same

const bigNumber = 34343534223432343423342n;// if  at the end its n then it will be treated as BigInt
const bigNumber1= 2342342342143232432;// it is treated as the number only 
console.log(typeof bigNumber);




// NON primitive Or Refrence 
// Array, Objects,functions
const heros=["Burhan", "Sabzraar","khan"]//non primitve datatype
let myObj={
    name:"hitesh",
    age:22,

}

//function are the examples of the 

const myfun = function(){
    console.log("hello world")

}

console.log(typeof myfun)// output is the function
console.log(typeof myObj)// output is the object
console.log(typeof heros)// output is the object
console.log(typeof null)// output is the object
console.log(typeof undefined)//output is the undefined
console.log(typeof Symbol);//output is the function