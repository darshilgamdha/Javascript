// condition

// toi manage the flow of the program

//if and else

let a = 15;

if (a > 20) {
  console.log("if statement");
}

if (a > 55) {
  console.log("if statement");
} else {
  console.log("else statement");
}

// let cheack if the year is leap year or not

let year = 2024;

if (year % 4 == 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

// let cheack if number odd or even

let num = 5;

if (num % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// if else ladder

let name1 = "Red and white";

if (name1 == "tops") {
  console.log("tops");
} else if (name1 == "Red and white") {
  console.log("Red and white");
} else if (name1 == "Lj") {
  console.log("Lj");
} else {
  console.log("Name not found");
}

// check the grade of student

let marks = 65;

//85>A
//65 and 85 vachhe B
//65 < C

if (marks >= 85) {
  console.log("A grade");
} else if (marks < 85 && marks >= 65) {
  console.log("B grade");
} else {
  console.log("C grade");
}

// temperature

// 40 >= hot
// 25 > 40 <= warm
// 25 < cold

let temperature = 50;
if (temperature >= 40) {
  console.log("hot");
} else if (temperature < 40 && temperature >= 25) {
  console.log("warm");
} else {
  console.log("cold");
}
// find maximum of 3 number using if else
let a2 = 60;
let b2 = 70;

if (a2 > b2) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}

// find maximum of 3 number using if else

let a1 = 60;
let b1 = 50;
let c1 = 30;

if (a1 > b1 && a1 > c1) {
  console.log("a1 is maximum");
} else if (b1 > a1 && b1 > c1) {
  console.log("b1 is maximum");
} else {
  console.log("c1 is maximum");
}

// nested if else

let f = 40;

if (f > 34) {
  if (f > 40) {
    console.log("inner if");
  } else {
    console.log("inner else");
  }
} else {
  console.log("outer else");
}

// switch case

let h = "30";
switch (h) {
  case "10":
    console.log("10");
    break;
  case "20":
    console.log("20");
    break;
  case "30":
  case "40":
    console.log("40 and 30");
    break;
  default:
    console.log("value not found");
}
