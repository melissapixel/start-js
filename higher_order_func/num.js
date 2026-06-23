// Напиши функцию, которая принимает число и возвращает новую функцию. Эта новая функция должна принимать другое число и возвращать сумму этих двух чисел.

const NUM_1 = 4;
const NUM_2 = 3;

function getNum1 (num1) {
    return num1;
}

function getNum2 (num2) {
    return num2;
}

function getSum (func1, num1, func2, num2) {
    return func1(num1) + func2(num2);
}

console.log(getSum(getNum1, NUM_1, getNum2, NUM_2));