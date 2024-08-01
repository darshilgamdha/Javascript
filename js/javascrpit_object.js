person={
    p_name:"Darshil",
    p_age:20,
    p_gender:"Male",
    p_address:"Gujarat",
}
console.log(person);
console.log(person.p_address)
console.log(person.p_age)
console.log(person.p_gender)
console.log(person.p_name)

// empty Object
// in java script we can creat an empty object using 2 ways 
values ={}
console.log(values)

values.number =12;
values.age = 13;
values.name = "darshil";

console.log(values);

// name = new Object() // you can also create on object like this
// this keyword

vehcicle = {
    name:"BMW", //property : value
    model:"X5",
    price:1000000,
    color:"Black",
    // full_details : function(){
        // return this.name + " " + this.color + " " + this.price + " " + this.color
    // },
    full_details : function(){
        console.log(this.name);
        console.log(this.model);
        console.log(this.price);
        console.log(this.color);
    }
}
// console.log(vehcicle.full_details);
vehcicle.full_details();

// you can create an copy of an object 
let x = vehcicle
console.log(x);
console.log(x.name)
console.log(x["model"]);


