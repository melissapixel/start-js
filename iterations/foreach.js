// case:  Ты работаешь в кофейне. У нас есть список заказов на утро, и бариста просит красиво вывести их в консоль, чтобы он мог по очереди готовить.

const orders = ["Капучино", "Латте", "Американо", "Раф"];

function printOrdersForUser (arr) {
    arr.forEach(function(el) {
        console.log(`We make: ${el}`);
    });
}

printOrdersForUser(orders);


// Ты на кассе в супермаркете. У тебя есть массив цен на товары в корзине. Нужно посчитать общую сумму, чтобы пробить клиенту чек.
const prices = [120, 85, 200, 45, 150];

function getCheck (arr) {
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

console.log(getCheck(prices));