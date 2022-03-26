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

// function to calculate the average of an array
function calcAverage(arr) {
    // create a variable to store the sum
    let sum = 0;
    // loop over the array
    for (let i = 0; i < arr.length; i++) {
        // add the current value to the sum
        sum += arr[i];
    }
    // calculate the average
    const average = sum / arr.length;
    // return the average
    return average;
}

//The calculator function
function calculator(bills, tipsArr = [], totalsArr = []) {
    //Calculate the tip and total for each bill
    // and store the total into total array,
    // and the tip into tip array.

    if (bills >= 50 && bills <= 300) {
        //tips will be
        const tips = Math.round(bills * 0.15);
        //store calculated tips into the tips array
        tipsArr.push(tips);
        //total payment would be
        const total = bills + tips;
        //store calculated total payment into the total array
        totalsArr.push(total);
        // Log the results to the console
        console.log(
            `
            Bill is ${bills}, 
            Your tip is ${tips},
            your total payment is ${total}.
            `
        );
        // Log the tips Array
        console.log(tipsArr);
        //Log the total array
        console.log(totalsArr);
        // return total;
    } else {
        //tips will be
        const tips = Math.round(bills * 0.2);
        //store calculated tips into the tips array
        tipsArr.push(tips);
        //total payment would be
        const total = bills + tips;
        //store calculated total payment into the total array
        totalsArr.push(total);
        console.log(
            `
            Bill is ${bills},
            Your tip is ${tips},
            your total payment is ${total}.
            `
        );
        // Log the tips Array
        console.log(tipsArr);

        //Log the total array
        console.log(totalsArr);
        // return total;
    }
}
// loop through each bill valueby using the forEach method
// and calculate the total payment amount by calling the Calculator function
// and calculate the tip amount for each bill value by calling the Calculator function
bills.forEach((element) => {
    calculator(element);
});

//calculate the average of the bills array
const result = calcAverage(bills);
console.log(result);
