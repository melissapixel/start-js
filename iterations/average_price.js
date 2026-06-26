// case: Маркетолог просит посчитать средний чек за день. У тебя есть массив сумм чеков. Нужно посчитать среднее арифметическое.

const checks = [450, 1200, 320, 890, 2100, 150];

function sum (arrOfN) {
    return arrOfN.reduce ((sum, item) => {
        return sum + item;
    }, 0)
}

function average (arrOfN) {

    let total = sum(arrOfN);
    let length = arrOfN.length;
    
    return total / length;
}

console.log(average(checks));