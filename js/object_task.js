// Create an object car with properties make, model, and year. Then, add a method displayInfo that prints out the car's details.

car = {
  make: "Toyota",
  model: "Camry",
  year: 2018,
  displayInfo: function () {
    console.log("Makers of this car is : " + this.make);
    console.log("Moel of this car is : " + this.model);
    console.log("Year of this car is : " + this.year);
  },
};
car.displayInfo();

circle = {
  getArea: function () {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};
circle.radius = 5;
console.log("circle Area is " + circle.getArea());
console.log("circle Perimeter is " + circle.getPerimeter());

circle = {
  getArea: function (a) {
    return Math.PI * a * a;
  },
  getPerimeter: function (a) {
    return 2 * Math.PI * a;
  },
};
console.log("circle Area is " + circle.getArea(5));
console.log("circle Perimeter is " + circle.getPerimeter(5));
console.log("circle Area is " + circle.getArea(15));
console.log("circle Perimeter is " + circle.getPerimeter(10));
console.log("circle Area is " + circle.getArea(20));
console.log("circle Perimeter is " + circle.getPerimeter(25));
