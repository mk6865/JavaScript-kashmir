// declaration two types 
// singleton like constructor
//object literals
// object.create
const mySym = Symbol("key1")

const Jsuser = {
    name:"hitesh",
    "full name": "hitesh coundary",
    mySym : "mykey1",
    age :13,
    location:"Kashmir",
    email:"mk234d@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
console.log(Jsuser.email);
console.log(Jsuser["email"])// it treat key as a string;
console.log(Jsuser["full name"]);
console.log(Jsuser.mySym); // if you are using as a symbol 

Jsuser.email="hitesh@gmail.com";

console.log(Jsuser.email);



Jsuser.greeting = function(){
    console.log("hello js user")
}

console.log(Jsuser.greeting());

