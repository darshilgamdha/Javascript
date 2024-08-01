// 1.check number is or not prime number
// 2.fibonacci
// 3.no digit 
// 4.palindrome
// 5.sum of digit 
// 6.armsroong number
// 7. factorial


// 1.check number is or not prime number
// 2 3 5 7 11


let n= 13
let prime = true;

for( let i=2; i<n; i++)
{
    if(n%i==0)
        {
            prime = false;
            break;
            }
            }
            if(prime){
                console.log("prime number")
            }
            else{
            console.log("not prime number")
            }


// 2.fibonacci

// 1 1 2 3 5 8 13
// a = 1 / 1 / 2 / 3 / 5
// b = 1 / 2 / 3 / 5 / 8
// c = a+b = 2 / 3 / 5 / 8 / 13

// a = b
// b = c
// c = a+b

let no= 5;
let a=1;
let b=1;

for (let i = 1; i <= no; i++) {
    console.log(a); // 1 // 1
    let c = a + b; // 2 
    a = b; // 1
    b = c; // 2
    
}


// 3.no digit
// 1234

// n = 1234
// n = n/10 = 123   
// n = n/10 = 12
// n = n/10 = 1
// n = n/10 = 0

let d= 1234567;
let count=0;
 while (d != 0) { //123456 //12345
    d = ~~(d / 10);
    count++;
 }
 console.log("count is" + count ); // 7



// 7. factorial
// 1*2*3*4*5*6*7*8*9*

n= 7;
factoroal = 1; //1 //2 // 6 //24
for(let i=1; i<=n; i++)
    {
        factoroal = factoroal*i //3 //4 //5
        }
        console.log("Factoroal of " + n + " is " +  factoroal);

// sum of 1 to 100
n =100;
sum = 0;

for(let i=1; i<=n; i++)
    {
        sum = sum + i
        }
        console.log("sum of " + n + " is " +  sum);


// 5.sum of digit 
// 1234
// 1+2+3+4=10
let n1 = 123445
let count1 = 0;
reverse =""

while (n1 != 0) { //1234 //123 //12 //1
    let last_digit = n1 % 10;
    reverse = reverse + last_digit;
    n1 = ~~(n1 / 10);
    count++;
    }
    console.log("reverse is " + reverse);
    console.log("count is " + count1); // 4

