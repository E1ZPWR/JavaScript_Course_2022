// ! LECTURE:Activating Strict Mode
// use strict mode : makes it easier to write "secure" code
// we use strict mode only for the specific functions or blocks of code that we want to be "secure"
"use strict";
let hasDriversLicense = false;
// By default always use const unless you know this vasriable is gonna change.
const passTest = true;
if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log(`I Can Drive`);
}

// ! LECTURE: Functions
// What is it ? \
// Function is a pice of code that can be execute again and again.

//function declearation
function logger() {
    // function body
    console.log("This is a Logger");
}

//calling / running / invoking
logger();

// usally we write a function , we always pass data into a function, and additionally , the function will always return data back to us.
// function functionName(Parameters){Functiuon Body}
//Parameters are like avariable that are parcific to the function.
function fruit(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges is ready`;
    return juice;
}
// calling / running / invoking the fruit() function
// fruit(5, 10);
// Where is the juice that just produced in the function ?
// the juice was returned from this function
// so it means that the result of running this function here is the juice that we just returned.
// once this function has been excuted,
// it means this code here is then replaced by the result of the function
// and in this case that's gonna be the juice that we just returned.
// IMPORTANT: if we want to use that value that was returned from this function, we need to store it in a variable.
// const variableName =  functionName(argument)
const juiceService = fruit(5, 10);
console.log(juiceService);
// DIFFERENT : The logger() function does not have a return , because it does not have a parameters .
// The fruit() function does have a return value, because it has a parameters ,
// so we have to save to result of the function (returned value) in a variable.
// Because the function does produce the result.
// ? Assignment - LECTURE: Function
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
const describeCountry = (country, population, capitalCity) => {
    const result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return result;
};

const describeCountryOne = describeCountry("USA", "3.5 million", "Washington");
const describeCountryTwo = describeCountry("China", "1.4 billion", "Beijing");
const describeCountryThree = describeCountry("Russia", "1.2 billion", "Moscow");

console.log(
    `
The Result of Country One is : ${describeCountryOne}

The Result of Country Two is : ${describeCountryTwo}

The Result of Country Three is : ${describeCountryThree}
`
);
// ! LECTURE: Function Declarations vs. Expressions
//Function Declarations :
function calculateAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calculateAge1(1992);
console.log(age1);

//Function Expressions :
// write a anonymous and store it in a variable.
// const variablerName = function(parameters){functrion body}
// Then this variable can be used anywhere in the code.
// const variableName = function expressions
const calculateAge2 = function (birthYear) {
    return 2022 - birthYear;
};
const age2 = calculateAge2(1992);
console.log(age2);

// function declarations can be used anywhere in the code , even call that function before it is declared.
// But function expressions can only be used after they are declared.
// This is b/c the hosting.(more on later lectures)
// ? Assignment - LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100

function percentageOfWorld1(population) {
    const percentage = (population / 7900) * 100;
    return percentage;
}
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
const percentageOfWorldOne = percentageOfWorld1(1441);
const percentageOfWorldTwo = percentageOfWorld1(8870);
const percentageOfWorldThree = percentageOfWorld1(1559);

console.log(percentageOfWorldOne, percentageOfWorldTwo, percentageOfWorldThree);
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};
const percentageOfWorldOneExpreesions = percentageOfWorld2(1441);
const percentageOfWorldTwoExpreesions = percentageOfWorld2(8870);
const percentageOfWorldThreeExpreesions = percentageOfWorld2(1559);
console.log(
    percentageOfWorldOneExpreesions,
    percentageOfWorldTwoExpreesions,
    percentageOfWorldThreeExpreesions
);

// ! LECTURE: Arrow Functions
// const variableName = (parameters)=> retuend value
// when write arrow function we do not have to explicitly write 'return' keyword
// it will return (after=>is returned value)implicitly.
// const variableName = (parameters)=>{functiuon body}
// () and {} can be removed
const calculateAge3 = (birthYear) => 2022 - birthYear;
const age3 = calculateAge3(1992);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} is gonna retirement after ${retirement} years`;
};
console.log(yearUntilRetirement(1992, "Jcck Li"));
// ? Assignment - LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'
const percentageOfWorld3 = (country, population) => {
    const percentage = (population / 7900) * 100;
    return `Country ${country} have population ${percentage}`;
};
// store the result of the function in a variable
const percentageOfWorldOneArrow = percentageOfWorld3("Country A", 4444);
const percentageOfWorldTwoArrow = percentageOfWorld3("Country B", 5555);
const percentageOfWorldThreeArrow = percentageOfWorld3("Country C", 6666);
// console log the result
console.log(
    `
${percentageOfWorldOneArrow},
${percentageOfWorldTwoArrow},
${percentageOfWorldThreeArrow},
`
);
// Another way : do store the result of the function in a variable , directly call and log
console.log(
    `
${percentageOfWorld3("Country A", 4444)},
${percentageOfWorld3("Country B", 5555)},
${percentageOfWorld3("Country C", 6666)}.
`
);
// IMPORTANT DIFFERENT BETWEEN ARROW FUNCTION AND TRADITIONAL FUNCTION(Function Declarations vs. Expressions)
// 1. The arrow function do not get 'this keyword' , it does not have a 'this' keyword.
// ! LECTURE: Functions Calling Other Functions

// ? Assignment - LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
const describePopulation = (country, population) => {
    const countryOnePop = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${countryOnePop} of the world.`;
};
console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 5555));
console.log(describePopulation("Singapore", 8782));

// ! Lecture Function reviews
// 3 Types of functions
// 1. Function Declaration
//functions that can be used before it's declared.
// function FunctionName(parameters){function body}
// 2. Function Expression
//a function value stored in a variable
//const varibaleName = function(parameters){function body}
// 3. Arrow Function
// Grate for a quick one-line functions. Has no this keyword.
//const variableName = (parameters)=>{function body}
// ! LECTURE: Introduction to Arrays
const variableArreay = [1, 2, 3, 4, 5];
// array are zero-based , the first element is 0, the second is 1, the third is 2, and so on.
//array.length is used to get the number of the Elements
// .length is called the property (talk later in Objects)
console.log(
    `
The first element in this array is 
${variableArreay[0]}
`
);
// use .length to get the last element of the array .length- 1
//- 1 b/c .length is NOT zero-based, so we always need to minus 1
// inside [] , is an expression. array.length[]
console.log(
    `
    The last element in this array is 
    ${variableArreay[variableArreay.length - 1]}
    `
);
// ? Assignment - LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
const arrayPopulations = [400000000, 500000000, 600000000, 700000000];
// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(arrayPopulations.length === 4);
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values
// const percentages = [
//     percentageOfWorld1(arrayPopulations[0]),
//     percentageOfWorld1(arrayPopulations[1]),
//     percentageOfWorld1(arrayPopulations[2]),
//     percentageOfWorld1(arrayPopulations[3]),
// ];
// console.log(percentages)

const percentages = arrayPopulations.map((population) => {
    return percentageOfWorld1(population);
});
console.log(percentages);
// ! LECTURE: Basic Array Operations (Methods)
// Technically is a function , but it is called a method in array.
// ADD Elements :
// Push Method : add an element to the end of the array
// Since push is a function here , and we know function have a return value,
// so in this case this function returned a length of a new array.
// Example:
const arrayOriginal = [1, 2, 3, 4, 5];
const arrayNew = arrayOriginal.push(6);
console.log(arrayOriginal);
// Unshift Method : add an element to the beginning of the array

// REMOVE Elements :
// Pop methods : remove an element from the end of the array
// Shift methods : remove an element from the beginning of the array

// indexOf Method : find the index of an element in the array (returns -1 if not found)
// includes Method : check if an element exists in the array(returns true or false)
if (arrayOriginal.includes(6)) {
    console.log("Yes, this array has 6");
} else {
    console.log(`No, This array  does not have 6`);
}

// ? Assignment - LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
const neighbours = ["China", "USA", "Singapore", "Japan"];

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
neighbours.push("Utopia");
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
neighbours.pop();
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
if (neighbours.includes("Germany")) {
    console.log("Germany is a central European country");
} else {
    console.log("Germany is not a central European country");
}
// 5. Change the name of one of your neighbouring countries. To do that,
// find the index of the country in the 'neighbours' array,
const aIndex = neighbours.indexOf("Singapore");
// and then use that index to change the array at that index position.
// For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
neighbours[aIndex] = "Russia";
console.log(neighbours);

// ! LECTURE: Introduction to Objects

// ? Assignment - LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

// The following example is called object literals syntax
// The diiferent of the objects and arrays are:
// The order of objects properties does not matter at all when we want to recrive them,
// but the order of arrays does matter.
// Use object for unstructured data and arrays for structured data
const myCountry = {
    //key:"value"
    country: "Singapore",
    capital: "Singapore",
    language: "English",
    population: 8782,
    neighbours: ["China", "USA", "Japan"],
};
const countryOOP = myCountry.country;
console.log(`${countryOOP} is the country from countryOOP`);
// ! LECTURE: Dot vs. Bracket Notation
// Dot notation is a way to access the properties of an object.
// Dot : We have to use the final property name
// Bracket notation : We can put any expression inside the brackets,
// we can compute it from some operations , b/c operations is an basiclly expression
// Examples :
const Jack = {
    firstName: "Jack",
    lastName: "Li",
    age: 30,
    jobTitle: "Developer",
    JobLevel: "Senior",
};
//use Dot notation to access the property 'age'
console.log(Jack.age);
//use Bracket notation with expression to access the property 'firstname' and 'lastname'
const name = "Name";
console.log(Jack["first" + name]);
console.log(Jack["last" + name]);

//Example 2 :
// use prompt ftn let user input some things
//the prompt ftn will return a string
// so we need to save the prompt ftn result in a variable
const answers = prompt(`What do you want to know about Jack? 
choose between firstname, lastname, age, jobtitle, joblevel`);
// console.log(Jack.answers); => return undefined
// undefined will happend when we tring to access a property on a object that does not exsit.
// Why? => In this case, the Object 'Jack' does not have a property answers, so it will return undefined.
// but if we change to bracket notation, it will return the value of the property.
// because inside bracket notation, we can put a compute value.
// therefore the result of this example :
//console.log(Jack[expressions]);
console.log(Jack[answers]);
Jack.friends = ["John", "Jane", "Bob"];
console.log(
    `${Jack.firstName} ${Jack.lastName} has ${Jack.friends.length} friends and his best friends is ${Jack.friends[0]}`
);
// Re-cap:
// When to use the dot notation:
// any other situation , we can use the dot notation
// When to use the bracket notation
// when we first need to compute the property name
// ? Assignment - LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
const stringFromOOP = `
${myCountry.country} has ${myCountry.population} million finnish-speaking people, 
${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.
`;
console.log(stringFromOOP);
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// ! LECTURE: Object Methods
// The Keyword This :
// The keyword this refers to the object that is currently being used.

const Peter = {
    firstName: "Peter",
    lastName: "Li",
    birthYear: 1992,
    jobTitle: "Developer",
    JobLevel: "Senior",
    hasDriversLicense: true,

    calAge: function () {
        // Now, Think about if we need to calculate the age 5 time , and this means
        // that we need to call calAge() funtion 5 time,
        // What if we createa new value for this object ,
        // so we can save the result from calAge() ftn.
        // let us to this keyword to create a new value for this object
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `
        ${this.firstName} ${this.lastName} is ${this.calAge()} years old 
        and he is a ${this.jobTitle}, 
        and he has ${this.hasDriversLicense ? "a" : "no"} Drivers License
        `;
    },
};
// Object Peter is currently calling the calAge function/Method ,
// So the keyword 'this' is referring to the object Peter.

// Peter.calAge();
const result = Peter.getSummary();
console.log(result);00

// ? Assignment - LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// ! LECTURE: Iteration: The for Loop

// ? Assignment - LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// ! LECTURE: Looping Arrays, Breaking and Continuing

// ? Assignment - LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// ! LECTURE: Looping Backwards and Loops in Loops

// ? Assignment - LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

// ! LECTURE: The while Loop

// ? Assignment - LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?
