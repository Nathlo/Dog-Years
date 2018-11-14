//create a variable to store my current age
const myAge = 44;
//create a variable that will change to store 2
let earlyYears = 2;
earlyYears *= 10.5;
// substracting the first 2 years to current age
let laterYears = myAge - 2;
//calculating number of dog years for laterYears
laterYears *= 4;

console.log('The early years are: ' + earlyYears);
console.log(`The number of dog years for later years are ${laterYears}`);

//calculating my age in dog years
const myAgeInDogYears = earlyYears + laterYears;
//write my name in lower case
const myName = 'THALIE'.toLowerCase();
//write a statement using interpolation
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
