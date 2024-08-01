// initial stage
// condition stage
// increment decrement

for (let a = 1; a<=10; a++)
{
    console.log(a + " hello");
}

for (let a = 1,b = 2; a<=100 && b<=50; a++,b++)
    {
        console.log(a + " =>" + b);
    }

let a = 1, b = 2;
for (; a <= 100 && b <= 50; ) {
  console.log(a + " =>" + b)
  a++, b++;
}

// for loop is used to print array

list = [1,45,34,23,78,56,23,67]

for (n=0; n<list.length;n++)
{
    console.log(list[n]+10);
}

// advance for loop //used to print datatype values
// for of  array ni value Aappe 
// for in array ni index apee 


// for of 
for(let x of list){
    console.log(x);  
}

// for in
for(let x in list){
    console.log(x);  
}
