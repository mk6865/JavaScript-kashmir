const user ={
    username:"hitesh",
    price:388,
    

    welecomeMessage:function(){
        console.log(`${this.username},welcome to my website`);
    }
    
}
user.welecomeMessage();


function chai(){
    let username = "Momin khan";
    console.log(this.username); // undefined; it output
}
chai();


const code  = function(){
    let  username = "khan"
    console.log(this.username); // output is the undefiend;
}
code();


const momin = () =>{
    let username = "junadi"
    console.log(this);
}
momin();



// ********** basics of arrow funtion***************;
const addTwo  = (num1, num2) =>{
    return num1 + num2; // explicit return we are using the cruly baraces;
}
console.log(addTwo(3,4));


// implicit return;
const addThree = (num1, num2, num3)  => (num1 + num2 + num3);
console.log(addThree(3,4,3));


// how to return object if in the javascript
const addFour = (num1, num2) => ({username:"insha"});
console.log(addFour(3,4));




