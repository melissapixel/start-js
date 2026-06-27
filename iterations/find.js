// В кофейне есть список напитков, которые сегодня в наличии:
//     Найди сам напиток 'капучино' (клиент хочет именно его).
//     Найди индекс напитка 'латте' (бариста должен знать, на какой позиции он в меню).

const menu = ['американо', 'латте', 'капучино', 'эспрессо', 'флэт уайт'];

const getForUser = menu.find((item) => {
    return item === 'капучино';
})
console.log(getForUser);

const indexForBarista = menu.findIndex((item) => {
    return item === 'латте';
});
console.log(indexForBarista)


// На полке лежат фрукты:
// Найди первый фрукт, название которого длиннее 5 букв (используй свойство .length у строки).
// Найди индекс первого фрукта, который начинается на букву 'м' (подсказка: у строк есть метод .startsWith('м')).
const fruits = ['яблоко', 'банан', 'киви', 'манго', 'ананас', 'виноград'];

const longFruit = fruits.find ((fruit) => {
    return fruit.length > 5;
});
console.log(longFruit);

const startWithM = fruits.findIndex ((fruit) => {
    return fruit.startsWith('м');
});
console.log(startWithM);


// В кофейне цены на напитки (в рублях) за последние дни:
// Найди первую цену, которая больше 250 рублей (клиент ищет премиум-напиток).
// Найди индекс первой цены, которая меньше 200 рублей (клиент хочет сэкономить).
const prices = [180, 220, 150, 300, 250, 190];

function maxPrice (arrPrices, min) {
    return arrPrices.find ((price) => {
        return price > min;
    });
}
console.log(maxPrice(prices, 250));

function minPriceIndex (arrPrices, max) {
    return arrPrices.findIndex ((price) => {
        return price < max;
    });
}
console.log(minPriceIndex(prices, 200));
