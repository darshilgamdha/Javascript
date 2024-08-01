let a =12;

console.log(Math.PI);
console.log(Math.round(a));
console.log(Math.ceil(a));// moti value 
console.log(Math.floor(a));// nani value
console.log(Math.trunc(a)); 
console.log(Math.sqrt(16));
console.log(Math.pow(a,2)); // 2nd power
console.log(Math.abs(-12)); // |x|
console.log(Math.max(1,2,3,4,5,6,7,8)); // max value
console.log(Math.min(1,2,3,4,5,6,7,8)); // min value
console.log(Math.cbrt(64));

//random number 1 to 100
console.log(Math.random()*100) + 5; 
// Math.floor(Math.random() * (max - min) ) + min;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

