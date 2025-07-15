const score = 500; // patttern simple pattern

const balance  = new Number(1000);
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// out put value is 200.00 two precision
console.log(balance.toFixed(1))


const otherNumber  = 234.4543;
console.log(otherNumber.toPrecision(2));


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // according to the indian number system


//*************************Maths********************** */


console.log(Math);
console.log(Math.abs(-243));// negative sign is removed
console.log(Math.abs(234));// keep positive
console.log(Math.round(5.3));
console.log(Math.round(4.6));
console.log(Math.round(5.5));
console.log(Math.ceil(5.2))
console.log(Math.floor(2.5));


console.log(Math.sqrt(5));
console.log(Math.min(5,3,5,34,532,400));
console.log(Math.max(53,34,353));

console.log(Math.random())// always give output between 0 and 1;
console.log((Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// remember this formula
