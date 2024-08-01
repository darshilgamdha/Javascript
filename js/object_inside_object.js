institute ={
    "name": "Institute of Technology",
    "location": "Dublin",
    "courses": ["BSc in Computer Science", "BSc in Mathematics"],
    "library" :{
        libranian : "mohit",
        books: [ 
            "Introduction to Algorithms",
            "Data Structures and Algorithms",
            "Discrete Mathematics",
        ]
    }
}
console.log(institute.name);
console.log(institute.location);
console.log(institute.courses);

console.log(institute.library);
console.log(institute.library.libranian);
console.log(institute.library.books);

institute.no_of_stundent = 30  // adding data in object

console.log(institute.no_of_stundent);
console.log(institute)

console.log(Object.values(institute)); // convert object values into an array

// object.entries // is used in loop
for(let [key,value] of Object.entries(institute)){
    console.log(key + " => " + value);
}

// number = [1,23,45,33,45];
// console.log(number);

// for(x in number){
//     console.log(x);
// }

// for(x of number){
//     console.log(x);
// }

console.log(JSON.stringify(institute))