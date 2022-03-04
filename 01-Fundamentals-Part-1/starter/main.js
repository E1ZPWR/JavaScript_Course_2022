//! LECTURE: Values and Variables
// values
// declearation : assign a value to a variable
// this will create a real variable in  your computer memory
let firstname = "John";

// To use this value in your code you need to use the variable name
console.log(firstname);

//? Assignments -  LECTURE: Values and Variables
//1. Declare variables called 'country', 'continent' and 'population' and
//   assign their values according to your own country (population in millions)
//2. Log their values to the console

let country = "Nigeria";
let continent = "Africa";
let population = "1.3 billion";
console.log(country, continent, population);

//! LECTURE: Data Types
//JavaScript has dtnamic typing ,
//we do not have to manually define the data type of the value stored in a variabvle,
//Instead , data types are determined automatically.
//Value has type , NOT variable. (let VariableName = Value)

//? Assignments -  LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
//    country. The variable should hold a Boolean value. Also declare a variable
//    'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
//    to the console

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//! LECTURE: let, const and var
// let : use let to assign a value to a variable  , this variable can be change later in the code
//       can be left as empty variable(do not assign any value)
//       let is block scoped (Section7)

// const : use const to assign a value to a variable , this variable can not be change later in the code
//         need initial value

// var : use var to assign a value to a variable , this variable can be change later in the code
//       always use let by default(Basically NEVER use var)
//       var is function scoped(Section7)

// a terrible idsea to create/declear a variable :
// lastname = "John";  -> this does not create a variable in the current scope ,
//                        instead it creates a global variable

//? Assignments -  LECTURE: let, const and var

// 1. Set the value of 'language' to the language spoken where you live (some
//    countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
//    change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = "English";
const birthYear = 1992;
const birthDay = "12/05/1992";

//! LECTURE: Basic Operators

//? Assignments -  LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?

let countryPopulation = 30000000;
let halfPopulation = countryPopulation / 2;
console.log(halfPopulation);
// 2. Increase the population of your country by 1 and log the result to the console
let countryPopulationIncrease = countryPopulation + 1;
console.log(countryPopulationIncrease);
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
let finlandPopulation = 6000000;
if (countryPopulation > finlandPopulation) {
    console.log(
        `Yes , My Country has ${countryPopulation} in populations ,  and it is more people than Finland ${finlandPopulation}`
    );
} else {
    console.log(
        `No , My Country has ${countryPopulation} in populations ,  and it is less people than Finland ${finlandPopulation}`
    );
}
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
averagePopulation = 33000000;
if (countryPopulation < averagePopulation) {
    console.log(
        `your country have ${countryPopulation} people, have less people than the average country ${averagePopulation}`
    );
} else {
    console.log(
        `your country have ${countryPopulation} people, have more people than the average country ${averagePopulation}`
    );
}
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
let description =
    "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

//! LECTURE: Strings and Template Literals

//? Assignments -  LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);

//! LECTURE: Taking Decisions: if / else Statements
//Example 1:
const age = 41;
const isLargerthan = age >= 40;
if (isLargerthan) {
    console.log(`${isLargerthan},You are older than 40`);
} else {
    console.log(`${isLargerthan},You are younger than 40`);
}
//Example 2:
const Jacks_birthYear = 2012;
// we need to declear century variable before if statement b/c
// any variable decleared outside of if statement will be gobal variable
// any variable decleared inside of if statement will be block variable
// and block variable will NOT be accessible from outside of if statement(Block)
let century;
if (Jacks_birthYear <= 2000) {
    century = 20;
    console.log(century);
} else {
    century = 21;
    console.log(century);
}

//? Assignments -  LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
if (countryPopulation > 33000000) {
    console.log("Portugal's population is above average");
} else {
    console.log("Portugal's population is 22 million below average");
}
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

//! LECTURE: Type Conversion and Coercion
//Conversion
// Convert a String to a Number using Number() ftn
//Convert a Number to a String use String() ftn

//Coercion
//operator + will do the Number convert to a String ('23' + '10' + 3 = '23103')
//operator - will do the opposite conversion , means String convert to a Number ('23' - '10' - 3 = 10 )
//opeator * and / will do the same conversion , means String convert to a Number ('23'* '2') or ('23 / '2')

//? Assignments -  Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

// 2. Execute the operations to check if you were right
console.log(`Type Conversion and Coercion" `);
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//! LECTURE: Truthy and Falsy Values
// 5 falsy values: undefined, null, 0, ''(empty string), NaN(Not a Number)
// 5 truthy values: all other values, including non-empty strings

console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean("undefined"));
console.log(Boolean(""));
console.log(Boolean({}));
//! LECTURE: Equality Operators: == vs. ===
// Operator: == vs ===
// (loose equality operators) == is used to compare two values, if they are equal, it will return true
// (Stricted equality operator) === is used to compare two values, if they are equal and of the same type, it will return true
// As a General rule for clean code , avoid loose operators as much as you can
// When comparing values , always use ===

// Operators: != vs !==
// (loose inequality operators) != is used to compare two values, if they are not equal, it will return true
// (Stricted inequality operator) !== is used to compare two values, if they are not equal and of the same type, it will return true
// always use strict operators when comparing values
//? Assignments -  LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
const numNeighbours = prompt(
    "How many neighbour countries does your country have?"
);
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
}
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
}
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
else {
    console.log(`No borders`);
}
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.

// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?

// Because === will compare the value and type of the variables , when input in prompt() ftn , the type is a string
// But when do if statement , the type is a number , so it will return false

// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1

if (Number(numNeighbours) === 1) {
    console.log(`Only 1 border!`);
} else if (Number(numNeighbours) > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}

// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// b/c the prompt ftn asked for a number input, if use == will igonre the type, so use == will create bugs in the future development ,
// but if we use === will strict type and values , so if the question asking for a Number value , then it must be a number.

//! LECTURE: Logical Operators

// A AND(&&) B : must all true or false and
// A OR(||) B : at least one true or false
// NOT A(!) : invert the value of A

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// AND(&&)
console.log(hasDriversLicense && hasGoodVision); //TRUE

// OR(||)
console.log(hasDriversLicense || hasGoodVision); // TRUE

// NOT(!)
console.log(!hasDriversLicense); // FALSE
console.log(!hasGoodVision); // FALSE

//combine
console.log(!hasDriversLicense && !hasGoodVision); // FALSE
console.log(hasDriversLicense && !hasGoodVision); // FALSE
console.log(!hasDriversLicense || hasGoodVision); // TRUE

// IS Sarah Should Drive ?

//? Assignments -  LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
const isCountryPopulation = 50000000;
const isCountryLanguageEnglish = true;
const isCountryIsland = false;
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
if (
    isCountryPopulation < 50000000 &&
    isCountryLanguageEnglish &&
    !isCountryIsland
) {
    console.log(`Sarah can live in this country`);
} else {
    console.log(`Sarah can NOT live in this country`);
}

// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria
const isRightCountry = false;
if (isRightCountry) {
    console.log(`You should live in Portugal :)`);
} else {
    console.log(`Portugal does not meet your criteria`);
}
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada

// ! LECTURE: The switch Statement
// without keyword 'break' , the switch statement will continue to run the next case

const day = "Sunday";
switch (day) {
    case "Monday": // Strict equality operator applied (===)
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Today is not a day of the week");
        break;
}

// ? Assignments -   LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'
const Swithclanguage = "Chinese";
switch (Swithclanguage) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}
// ! LECTURE: Satements and Expressions
// The expression is a pice of code that produces a value.
// for example 3+ 4 is a expression , but 3+4 is gonna produce a value
// another example of expression is true && false && !false
// The statement is like a bigger pice of code that is excuted and which does not produce a value by it self
// So the declearation is like a compelete sentence and expression are like the words that make up the sentences
// we write our programs as a sequences of actions , and these actions are statements.
// for example :
// if(23 > 10){const str = '23 is bigger'}
// In here , the whole if statement is a statement ,
// and the string itself '23 is bigger' -> is a expression
// and const str = '23 is bigger' -> this line of code is a statement , b/c it not produce a value
// Overall , Basically , everything ending with ; is a statement
// evrything inside ${} is a expression b/c we need value inside ${}
// ! LECTURE: The Conditional (Ternary) Operator
const ConditionalAge = 23;
// condition ? if part : else part
// age >= 18 ? console.log("You can vote") : console.log("You can not vote");

// The conditional operator is a special operator and operates always produces a value , -> so the operator is a expression
// Therefore ,the following operators is now a expression ,
// expression produces a value and can be saved into a variable,
// so we add a variable declearation for this expression here.
//const variable = expression
const drink = ConditionalAge >= 18 ? "wine 🍷" : "water 💧";
console.log(`The result of age check is you can do ${drink}`);
//By using the ternary operator, which produces a value,
// we can have the conditional inside the template literal (`   `).
// The template literal is a string that can contain expressions.
console.log(`You can drink ${ConditionalAge >= 18 ? "wine 🍷" : "water 💧"}`);
// We do still need if-else statementwhen we have a large pice of code  ,
//but we can use the ternary operator instead when we need to make a quick desion

//? Assignments -  LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
countryPopulation = 33000000;
const conditionalLiving =
    countryPopulation > 33000000
        ? `Portugal's population is above average'`
        : `'Portugal's population is below average`;
console.log(conditionalLiving)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
