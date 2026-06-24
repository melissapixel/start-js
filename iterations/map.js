// case: В кофейне закончились старые стаканчики, и теперь все объемы напитков нужно увеличить в 1.5 раза (новые стаканчики больше). 

const volumes = [200, 300, 400];

const newVolumes = volumes.map((item) => {
    return item * 1.5;
});

console.log(volumes);
console.log(newVolumes);


// case: На склад привезли фрукты, но цены указаны в килограммах, а нам нужно в граммах (чтобы точнее считать для рецептов). 
const weightsInKg = [1, 2.5, 0.75, 3];

function weightsInGrams (arr) {
    return arr.map((item) => {
        return item * 1000;
    });
}
console.log(weightsInGrams(weightsInKg));


// case: У нас есть список названий напитков, но они написаны как попало. Нужно привести их к единому стилю — все заглавными буквами.
const drinks = ['latte', 'cappuccino', 'espresso', 'americano'];

const drinksForMenu = drinks.map((item) => {
    return item.toUpperCase();
});
console.log(drinksForMenu);


// case: В магазине акция: если фрукт стоит больше 100 рублей, на него скидка 20%. Если меньше или равно 100 — цена остается.
const prices = [80, 150, 100, 200, 50];

const pricesWithDisc = prices.map ((item) => {
    if (item > 100) {
        return item * 0.8;
    }
    return item;
});

console.log(pricesWithDisc);