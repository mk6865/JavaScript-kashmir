//Immediately Invoked function expression (iife);
(function chai(){
    // named iifi becasue the name of the function is given
    console.log("DB connected")
})();

(  ()  =>{ // unnamed iffe
    console.log('db connedted two')
})(); // semicolon is necessary because it will not executed another functions


((name) =>{
    console.log(`hi welcome ${name}`)
})('khan')