// ! Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = Math.round(this.mass / (this.height * this.height));
        return this.bmi;
    },
};
let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = Math.round(this.mass / (this.height * this.height));
        return this.bmi;
    },
};
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
console.log(
    `${
        john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName
    }'s BMI (${
        john.calcBMI() > mark.calcBMI() ? john.bmi : mark.bmi
    }) is higher than ${
        john.calcBMI() > mark.calcBMI() ? mark.fullName : john.fullName
    }'s MBI (${john.calcBMI() > mark.calcBMI() ? mark.bmi : john.bmi})!`
);
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// Expected output: "John's BMI (28.3) is higher than Mark's (23.9)!"

