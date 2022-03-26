// ! Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to
// calculate tips and total values (bill + tip) for every bill value
// in the bills array. Use a for loop to perform the 10 calculations!

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// ? Answer
// declearation for all the bills in array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totalArr = [];
const tipsArr = [];

//calcTip: calculate the tip for each bill
const calcTips = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
// Use forEach method to calculate the tip and total for each bill by callback caclTips function
bills.forEach((bill) => {
    // calculate tips for each bills & store the values into a variable
    const tips = calcTips(bill);
    // push the tips into the tips array
    tipsArr.push(tips);
    // push the total into total array
    totalArr.push(bill + tips);
});
// log the tips array
console.log(tipsArr);

// log the total array
console.log(totalArr);

// create a function to calculate the average of the array
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// calculate the average of the bills arrays & Log the result
const calcAvgBills = calcAverage(bills);
console.log(calcAvgBills);
// calculate the average of the totalArr arrays & Log the result
const calcAvgTotal = calcAverage(totalArr);
console.log(calcAvgTotal);
// calculate the average of the tipsArr arrays & Log the result
const calcAvgTips = calcAverage(tipsArr);
console.log(calcAvgTips);
