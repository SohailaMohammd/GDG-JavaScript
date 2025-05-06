// videos(71-78)
// تكليف 1


let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let addSelf = mix.map(function (ele) {

  return typeof ele !== "number" ? ele : "";
});
let red = addSelf.reduce(function (acc, current) {
  return acc + current
});

console.log(red);

console.log("------------------------------------------------");

// تكليف 2

let myString = "EElllzzzzzzzeroo";
let removeLetters = myString.split("").filter(function (ele, index, arr) {
  return arr.indexOf(ele) === index;
})
let word = removeLetters.reduce(function (a, c) {
  return a + c;
});
console.log(word);

console.log("------------------------------------------------");

// تكليف 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arr = myArray.reduce(function (acc, current) {

  return acc.concat(current);
}, []);
console.log(arr.join(""));

console.log("------------------------------------------------");

// تكليف 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newArr = numsAndStrings.filter(function (ele) {
    return typeof ele == "number";
  }).map(function (ele) {
    return -ele;
  });
console.log(newArr);

console.log("------------------------------------------------");

// تكليف 5

let nums = [2, 12, 11, 5, 10, 1, 99]; 
let reduce = nums.reduce(function (acc, curr) { 
return curr % 2 === 0 ? acc * curr : acc + curr; 
}, 1); 
console.log(reduce);


console.log("------------------------------------------------");

// videos(79-85)

// تكليف 1

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log("------------------------------------------------");

// تكليف 2
// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {}
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.assign({}, { property: "Method Three" }); 
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.create({}); 
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"

console.log("------------------------------------------------");

// تكليف 3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a:1},threeNums,twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


console.log("------------------------------------------------");

// تكليف 4
