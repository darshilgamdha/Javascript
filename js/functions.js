// function is a block of code that runs when we called

//function name 
//function parameter
//function block
//function return type

function marufunction() {
    console.log("From Function");
}

marufunction(); //From Function
marufunction(); //From Function

// code reuse

// function parameter (arguments)
// somethings that we pass from outside into function

function display(a) {
    console.log(a)
}

display(12);  // we are passing the value inside a function while calling
display(23);
display(23.12);
display("bascom");

function sum(a,b){
    console.log(a*b);
}

sum (19,56);
sum (39,536);
sum (59,356);
sum (69,56);
sum (79,6);


// function return type

function mustfunction() {
    return 12 
}

let j = mustfunction() + mustfunction()
console.log(j); // 24


//////////////////////////////////////////////////////////////////////////////////////////////

//a*b +c*d

function mysum(a,b) {
    return a+b
}

function mymulti(a,b){
    return a*b
}

console.log(mysum(mymulti(10,30) , mymulti(10,34)))