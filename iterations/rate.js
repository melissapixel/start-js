// У нас есть массив оценок товара от пользователей (от 1 до 5). Нужно:

//     Посчитать среднюю оценку (округлить до 1 знака после запятой).
//     Посчитать, сколько оценок "5" (отличных).
//     Вывести результат в консоль в формате: "Рейтинг: 4.2, Отличных оценок: 15"

const ratings = [5, 4, 5, 3, 5, 4, 5, 2, 5, 5, 4, 5, 3, 5, 5, 4];

function sumOfNum (arrOfNum) {
    return arrOfNum.reduce((total, num) => {
        return total += num;
    }, 0);
}
console.log(sumOfNum(ratings));

function averageofNum (arrOfNum) {
    let total = sumOfNum(arrOfNum);
    let length = arrOfNum.length;

    return total / length;
}
console.log(averageofNum(ratings));

function findCountOfEl (arr, char) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(findCountOfEl(ratings, 5))


function createLogAboutRate (arrRate) {
    return `Average rate is ${averageofNum(arrRate)}. Count of grate rate if ${findCountOfEl(arrRate, 5)}.`;
}

console.log(createLogAboutRate(ratings));