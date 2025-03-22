// videos(27-30)
// تكليف 1
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).repeat(3).toLowerCase()); // eee

// تكليف 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE, 3)); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

console.log("--------------------------------------");
// videos(31-32)

// تكليف 1

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 == +"-40")); // true
console.log(!(10 <= "-40")); // true
console.log(!("10" === 10)); // true
console.log(!(20 < false)); // true

// تكليف 2

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(!(num1 > num2)); // true
console.log(!(num1 == num2)); // true
console.log(!(num1 === num2)); // true
console.log(typeof num1 === typeof num2); // true

console.log("--------------------------------------");

// videos(33-37)

// تكليف 1

// Test Case 1
let num3 = 9; // "009"
if (num3 < 10) {
    console.log("00" + num3);

}

// Test Case 2
let num4 = 20; // "020"
if (num4 > 10 && num4 < 100) {
    console.log("0" + num4);
}
// Test Case 3
let num5 = 110; // "110"
if (num5 >= 100) {
    console.log(num5);
}

// تكليف 2

let str = 9;
let str1 = "9";
let str2 = "20";

if (str == str1) {
    console.log(`${str} Is The Same Value As ${str1}`);
}
else {
    console.log("not same value");

}
if (str == str1 && typeof str != typeof str1) {
    console.log(`${str} Is The Same Value As ${str1} But Not The Same Type`);
} else {
    console.log("not same value");

}
if (str != str2 && typeof str != typeof str2) {
    console.log(`${str} Is Not The Same Value Or The Same Type As ${str2}`);
} else {
    console.log("not same value");
}
if (str1 != str2 && typeof str1 == typeof str2) {
    console.log(`${str1} Is The Same Type As ${str2} But Not The Same Value`);
} else {
    console.log("not same value");
}


console.log("--------------------------------------");

// videos(38-39)

// تكليف 1

let day = "   friday  ";
day = `${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`;
console.log(day);
switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}

console.log("--------------------------------------");

// videos(40-47)

// تكليف 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.pop();
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length = num;
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// تكليف 2
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort();
let words = allArrs.slice(arr2.length);
let result = words.join("").toLowerCase();
console.log(result); 
