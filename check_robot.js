/*
    Check for Robot.
    Use prompt (from js)

*/
const firstNum = 5;
const SecondNum = 6;
// const operator = "+";
const answare = firstNum + SecondNum;

const expression = `${firstNum} + ${SecondNum}`;
const quetion = `How much ${expression}?`;

const checkRobot = prompt(quetion);
const checkAnsware = (checkRobot === answare + "") ? "Access for u." : "Are u Robot.";

console.log(checkAnsware);