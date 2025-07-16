// const tinderUser = new Object()// one way

const tinderUser = {}
tinderUser.id ="133abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser ={
    email:"sum@gumail.com",
    fullname:{
        userfullName:{
            firstName:"hitesh",
            lastName:"choudary"
        }
    }
}
console.log(regularUser.fullname.userfullName.firstName)


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 = Object.assign(obj1,obj2);// this is right way to merge two objects


const obj3 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);

const users = [
    {
        id:1,
        email:"Hitesh@gmial.com"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('momin'));