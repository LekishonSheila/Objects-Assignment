// Given an array of objects, each object representing a person with a name and age property, write a function that 
// returns a new array containing the names of all people who are 18 years old or older.
// const people = [
    // { name: 'Alice', age: 17 },
    // { name: 'Eunice', age: 22 },
    // { name: 'Charlie', age: 14 },
    // { name: 'Max', age: 19 },
//   ];
function getolderNames(people){
    const olderPeople = people.filter(person => person.age >= 18);
    const olderNames = olderPeople.map(person => person.name);
    return olderNames
} 
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  const olderNames =  getolderNames(people);
  console.log(olderNames);


// Write a function that takes an array of objects, where each object represents a product with a name, price, and category property.
//  The function should 
// return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
// const products = [
    // { name: 'Laptop', price: 1200, category: 'Electronics' },
    // { name: 'Shirt', price: 25, category: 'Clothing' },
    // { name: 'Headphones', price: 80, category: 'Electronics' },
    // { name: 'Shoes', price: 60, category: 'Clothing' },
//   ];
function Category(products) {
    const categories = {};
  
    for (let i = 0; i < products.length; i++) {
      const category = products[i].category;
  
      if (categories[category]) {
        categories[category].push(products[i]);
      } else {
        categories[category] = [products[i]];
      }
    }
  
    return categories;
  }
  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  const productsByCategory = Category(products);
console.log(productsByCategory);

//  Given an array of objects, where each object represents a student with a name and an array of scores, write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
// const students = [
    // { name: 'John', scores: [90, 80, 85] },
    // { name: 'Jane', scores: [95, 92, 88] },
    // { name: 'Jim', scores: [70, 80, 75] },
    // { name: 'Jill', scores: [85, 90, 84] },
//   ]; 
function StudentsWithAvgScore(students) {
    const result = [];
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const avgScore = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
  
      if (avgScore >= 85) {
        result.push(student.name);
      }
    }
  
    return result;
  }
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  const studentsWithAvgScoreAbove85 = StudentsWithAvgScore(students);
console.log(studentsWithAvgScoreAbove85);

// Given an object representing a car, with properties for the make, model, year, and a method to display
//  the car's information, write a function that takes the car object and adds a new method to the object 
// called age. The age method should return the current age of the car based on the current year and the car's year property.
// const car = {
    // make: 'Ford',
    // model: 'Ranger',
    // year: 2023,
    // displayInfo: function() {
    //   console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    // },
//   };
function MethodToCar(car) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - car.year;
  
    car.age = function() {
      return age;
    };
  }
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  MethodToCar(car);

console.log(car.age());

  

  


  