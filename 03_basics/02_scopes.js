
// var c = 300;
let a = 300;

if(true){
    let a = 10;
    const b =20;
    var c = 30;
    console.log("inner",a);
}
console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username= "momin"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "  Youtube"
        console.log(username  + website);
    }
    // console.log(website);
}
// consol.log(username);


// ***********************interesting ***************


function addone(value){
    return value +1;
}
addone(5);
console.log(addone(5))


const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(2));