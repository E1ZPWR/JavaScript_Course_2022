// ! Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//? Answers:
// 1. Calculate the average score for each team

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//  {RESULT = NO DRAW No WIN as Less than 100 points}
// const Dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//  {RESULT = Team Koalas wins}
// const Dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// {RESULT = It's a draw}
const Dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;

const minimumScore = 100;
const rulesForMinimum = Dolphins >= minimumScore && koalas >= minimumScore;

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

if (Dolphins > koalas && rulesForMinimum) {
    console.log(
        `
    !
    Team Dolphins wins the trophy 
    with score ${Dolphins}
    !
    `
    );
} else if (Dolphins < koalas && rulesForMinimum) {
    console.log(
        `
    Team Koalas wins the trophy 
    with score ${koalas}
    !
    `
    );
} else if (Dolphins === koalas && rulesForMinimum) {
    console.log(
        `
    It's a draw! 
    Team Koalas scored  ${koalas}
    Team Dolphin scored ${Dolphins}
    !
    `
    );
} else {
    console.log(
        `
    !
    No team wins the trophy
    Reason : No Teams scored higher than 100 points.
    Team Koalas scored  ${koalas} 
    Team Dolphin scored ${Dolphins}
    !
    `
    );
}
