const marvelHeros= ["thor","ironman","spiderman"];
const dc = ["superman","flash","batman"];
marvelHeros.push(dc);


console.log(marvelHeros);// array inside the array it  treats another another as a single elemnets
console.log(marvelHeros[3][1])


const allHeros = marvelHeros.concat(dc);
console.log(allHeros)// same output as the we used the push operation


const all_new_heros = [...marvelHeros,...dc];
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = another_array.flat(Infinity);
console.log(realArr);


console.log(Array.isArray("hitesh")) // result false
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))// interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));// its converting the variable into the array we are using the default functions


