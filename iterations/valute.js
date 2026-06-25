// case: Ты работаешь в интернет-магазине. Бэкенд вернул тебе цены товаров в долларах. Но сайт у нас российский — нужно показать цены в рублях. Курс — 90 рублей за доллар.

const pricesInUsd = [19.99, 49.50, 120, 8.75, 299];
const USD_TO_RUB = 90;

const pricesInRub = pricesInUsd.map((item) => {
    return item * USD_TO_RUB;
});

console.log(pricesInRub);