// function sayMyName(){
//     console.log("MOMIN Khan");
    
// }
// sayMyName();




// function addTwoNumbers(num1, num2){ // parameters
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,"a");// arguments  
// addTwoNumbers(2,2);
// addTwoNumbers(2,"2");


// function add(num1, num2){
//     // let result = num1 + num2;
//     // return result;
//     return num1+num2;
// }
// const result = add(2,3);
// console.log("result:",result);    



// function loginUser(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return;
//     }
//   return `${ username} just logged in`
// }

// // console.log(loginUser("hitesh"))
// // console.log(loginUser())

function calCarPrice(...num1){//triple dot is used for the when the value is not specified
    return num1;
}
console.log(calCarPrice(2,200, 300,340))

const user={
    username:"hitesh",
    price:200
}
function handleObject(anyobject){
    
}