//reset- არის ოპერატორი რომელიც გამოიყენება როდესაც გვინდა დავამახსოვროთ მასივის ან ობიექტის დანარჩენი ნაწილი ცვლადში ხოლო spread ასევე ოპერატორია რომელიცა გამოიყენება როდესაც გვინდა ობიექტი ან მასივი გავშალოთ სხვა სტრუქტურაში.
const person = {
  name: "andria",
  age: 30,
  height: 175
};
const { name, ...rest } = person;
console.log(name);
console.log(rest);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const combinedObj = { ...obj1, ...obj2, ...obj3 };
console.log(combinedObj);

function printNames(...names) {
  names.forEach(name => {
    console.log(name);
  });
}
const nameList = ["andria", "gio", "saba", "dato"];
printNames(...nameList);
