// case: В кофейне за день было несколько заказов. Пришли массивом суммы чеков. Нужно посчитать общую выручку за день.
// const checks = [150, 230, 89, 420, 175];

// const checksSum = checks.reduce((total, value) => {
//     return total + value;
// }, 0);

// console.log(checksSum);

// На складе фруктовой лавки пересчитывают товары. У нас есть массив названий фруктов. Нужно с помощью reduce посчитать, сколько всего яблок в этом списке.
const fruits = ['яблоко', 'банан', 'яблоко', 'апельсин', 'яблоко', 'груша'];

const appleCount = fruits.reduce((total, item) => {
    if (item === 'яблоко') {
        total++;
    }
    return total;
}, 0);

console.log(appleCount);



// У нас есть массив названий напитков. Нужно склеить их в одну строку через запятую, чтобы вывести на вывеску.
const drinks = ['Латте', 'Капучино', 'Эспрессо', 'Раф'];

function showMenu (menu) {
    return menu.reduce((total, value) => {
        return `${total}, ${value}`;
    });
}
console.log(showMenu(drinks));



// Возвращаемся к кофейне. У нас есть массив чеков. Нужно найти самый большой чек с помощью reduce.
const checks = [150, 230, 89, 420, 175];

function maxCheck (arr) {
    return arr.reduce((total, check) => {
        if (total < check) {
            total = check;
        }
        return total;
    }, 0);
}

console.log(maxCheck(checks));