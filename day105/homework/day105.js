const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

const user = {
  name1: "Giorgi",
  age: 25,
  country: "Georgia"
};
const { name1, country } = user;
console.log(name1)
console.log(country);

const person = {
  name: "Nino",
  age: 28
};
const [name, age] = person
console.log(name)
console.log(age)

const numbers = [10, 20, 30, 40, 50];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest);

const student = {
  name: "Luka",
  marks: {
    math: 90,
    physics: 85
  }
};
const { marks: { math, physics } } = student;
console.log(math)
console.log(physics);
