// videos(48-53)
// تكليف 1
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += 10) {
    if (i == exclude) {
        continue;
    }
    console.log(i);
}

console.log("-------------------------------------------------------------------------");

// تكليف 2

let Start = 10;
let End = 0;
let Stop = 3;

for (let i = Start; i >= Stop; i--) {
    if (i < 10) {
        console.log(`${End}${i} `);
    }
    else {
        console.log(i);

    }

}
console.log("-------------------------------------------------------------------------");

// تكليف 3
let stArt = 1;
let eNd = 6;
let breaker = 2;
for (i = stArt; i <= eNd; i++) {
    console.log(i)
    for (j = breaker; j < eNd; j += breaker) {
        console.log(`-- ${j}`)
    }
} 
console.log("-------------------------------------------------------------------------");

// videos(54-56)

// تكليف 1

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (
    typeof friends[index] === "string" && friends[index][0] !== "A"
  ) {
    console.log(`"${++counter} => ${friends[index]}"`);
  }
  index++;
}

// console.log("-------------------------------------------------------------------------");

// videos(57-63)

// تكليف 1

function message(name, gender) {
  if (gender == "Male") {
    console.log(`Hello Mr ${name}`);

  }
  else if (gender == "Female") {
    console.log(`Hello Miss ${name}`);
  }
  else {
    console.log(`Hello , ${name}`);

  }
}
message("Ahmed", "Male");
message("Rana", "Female");
message("Nada");

console.log("-------------------------------------------------------------------------");

// تكليف 2
function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(firstNum + secondNum);
  }
  else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  }
  else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
  else if (operation === undefined && secondNum !== undefined) {
    console.log(firstNum + secondNum);
  }
  else {
    console.log(`Second Number Is NotFound`);
  }
}
calculate(5, 10, "add");
calculate(5, 10, "subtract");
calculate(5, 10, "multiply");
calculate(5, 10);
calculate(5);

console.log("-------------------------------------------------------------------------");

// تكليف 3
function Ages(age) {
  if (age > 10 && age < 100) {
    console.log(`Months : ${age * 12}`);
    console.log(`Weeks : ${age * 12 * 4}`);
    console.log(`Days : ${age * 12 * 4 * 7}`);
    console.log(`Hours : ${age * 12 * 4 * 7 * 24}`);
    console.log(`Minutes : ${age * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Seconds : ${age * 12 * 4 * 7 * 24 * 60 * 60}`);
  }
  else {
    console.log("Out Of Range");

  }
}
Ages(21);
Ages(6);


console.log("-------------------------------------------------------------------------");

// videos(64-70)

// تكليف 1

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let first = zName.substr(0, 5);
    let last = zName.slice(6, 7).toUpperCase();
    return `Hello ${first} ${last}.`;
  }
  function ageWithMessage(zAge) {
    return `Your age is ${zAge.substr(0, 2)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You live in ${zCountry.substr(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)},${countryTwoLetters(zCountry)};`

  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


console.log("-------------------------------------------------------------------------");

// تكليف 2

let itsMe = () => {
  return `Arrow Function`;
}
console.log(itsMe());

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); 
console.log("-------------------------------------------------------------------------");

// تكليف 3

function checker(zName) {
  return  (status) => {
    return (salary) =>{
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
