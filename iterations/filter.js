// case: У нас есть массив с ценами на кофе в кофейне (в рублях). ставь только те позиции, которые стоят меньше 200 рублей.
const coffeePrices = [150, 220, 180, 350, 90, 270, 410, 160];

const cheapCoffee = coffeePrices.filter((price) => {
    return price < 200;
});

console.log(cheapCoffee);


// case: У нас есть список фруктов, которые привезли на склад: Оставь только те фрукты, названия которых начинаются на букву "a". Назови новый массив aFruits.
let fruits = ['apple', 'banana', 'apricot', 'orange', 'avocado', 'mango', 'pear'];

const fruitsWichStartA = fruits.filter((fruit) => {
    return fruit.startsWith('a');
});

console.log(fruitsWichStartA);



// case: Оставь только те десерты, название которых короче или равно 5 символам. Назови новый массив shortDesserts.
let desserts = ['cake', 'tiramisu', 'pie', 'eclair', 'muffin', 'tart', 'panna cotta'];

function shortDesserts (dessertsArr) {
    return dessertsArr.filter((dessert) => {
        return dessert.length <= 5;
    });
}

console.log(shortDesserts(desserts));