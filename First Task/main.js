// Videos (1 - 9)
// تكليف 2
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = " 80px";
document.querySelector("h1").style.fontWeight = " bold";
document.querySelector("h1").style.textAlign = " center";
document.querySelector("h1").style.fontFamily = " Arial";

// تكليف 6

// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page"); 
*/

// --------------------------------------------------------------

// Videos (10 - 17)
// تكليف 1

let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + "" + numberTwo);
console.log(typeof numberOne + " " + typeof numberTwo);

console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberOne + " \n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);

// تكليف 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


// تكليف 3
console.log(" `I'm in \\\\ \n Love \\\\ \"\"\" \'\'\' \n  ++ With ++ \n \\\"\"\" \\\"\"\" \n \"\"JavaScript\"\"`` ");

// تكليف 3

let a = 21;
let b = 20;

console.log("_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_"); // _21_2021_2021_2021_20_

// --------------------------------------------------------------

// Videos (18 - 22)
// تكليف 1

console.log((10 * 20 - (15 % 3) + 190 + 10 - 400)); // 0

// تكليف 2

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(+num + +num); // 6

// Soultion Four
console.log(num *  --num  ); // 6

// Solution Five
console.log(++num + ++num - --num + true +true); // 6

// Solution Six
console.log(Number(num) + Number(num)); // 6


// تكليف 3

let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log(Number(number)+Number(number)); // 20

// Solution Three
console.log(++number + +number -true -true); // 20

// Solution Four
console.log((+number / +number) * (+number + +number) -true -true); // 20


// تكليف 4

let points = 10;
let add = 3;
// Write Your Code Here

console.log(points + add); // 13

// Write Your Code Here

console.log(points - add  +true); // 8;





// Videos (23 - 26)
// تكليف 1

console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10e4); // 100000
console.log(1e5); // 100000
console.log(10** 5); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt("100000")); // 100000
console.log(parseFloat("100000.0")); // 100000
console.log(2*5e4); // 100000
console.log((Math.max(10, 100, 1000, 10000, 100000))); // 100000
console.log((Math.min(10, 100, 1000, 10000, 100000)*1e4)); // 100000
console.log(Math.pow(10,5)); // 100000


// تكليف 5

let num2 = 10;

console.log(+(Number.isInteger(10))+num2/num2 ); // 2

// تكليف 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseFloat(flt).toFixed(0)); // 10

// تكليف 7

console.log(Math.trunc((Math.random())*4)); // 0 || 1 || 2 || 3 || 4

