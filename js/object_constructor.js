// person1 = {
//     name: "John",
//     age: 25
// }
// person2 = {
//     name: "darshil",
//     age: 20
// }
// person3 = {
//     name: "wick",
//     age: 45
// }    //we have to avoid this

function person(name,age){
    //object constructor // function
    this.name=name;
    this.age=age;
}

// we can create an dynamic obejct like this
let person1=new person("John",25);
let person2=new person("darshil,20");
let person3=new person("wick",45);

console.log(person1)
console.log(person2)
console.log(person3)

function vehicle(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
    this.no_of_wheels=4; //default object values
}
vehicle.prototype.color = "red"; //adding new property into object constructor using prototype

maruti = new vehicle("maruti", "suzuki" , "80000");
maruti.color = "red";

s1 = new vehicle("s1" , "BMW" , "8000000");
s2 = new vehicle("s2" , "audi" , "80000000");
s2.color = "black";
console.log(maruti)
console.log(s1) 
console.log(s2)

console.log(maruti.color)
console.log(s1.color)
console.log(s2.color)

/////////////////////////////////////////////////////////////////
function factory(name,chemical_name,no_boilers,no_emp){
    this.name=name;
    this.chemical_name=chemical_name;
    this.no_boilers=no_boilers;
    this.no_emp=no_emp;
    this.chemicalDescription = function(){
        return this.chemical_name + " is " + " very reactive ";
    };
}
factory.prototype.display = function(){
    console.log(this.name);
    console.log(this.chemical_name);
    console.log(this.no_boilers);
    console.log(this.no_emp);
}

factory.prototype.changeName = function(name1){
    this.name=name1;
}


reliance = new factory("Suratport","DymithailXYZ",6, 50);
console.log(reliance.chemicalDescription());

reliance.display()
reliance.changeName("haziraport")
reliance.display()

