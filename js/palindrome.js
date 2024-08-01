//1213121
let n = 121;
let original = n;

let reverse = 0 

while( n != 0){
    let digit = n % 10; //4 //3 //2 //1
    reverse = reverse * 10 + digit;

    n = ~~(n/10); //123 //12 //1 //0

}

if(reverse == original){
    console.log("palindrome")
} else {
console.log("not palindrome")
}

let count = 0;
for (let i = 1; i <=10; i++) {
    let n = i;
let original = n;

let reverse = 0 

while( n != 0){
    let digit = n % 10; //4 //3 //2 //1
    reverse = reverse * 10 + digit;

    n = ~~(n/10); //123 //12 //1 //0

}

if(reverse == original){
    console.log(i);
    count++

}
}

console.log("total :" + count );

// armtrong number

let d = 12345
let count1=0;
 while (d != 0) { 
    d = ~~(d / 10);
    count1++;
 }
 console.log("count is " + count1 ); 