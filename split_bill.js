// Ресторан.
// Определенное количество людей заказали определенное количество еды.
// Нужно помочь определенным количествам людей поделить счет между собой для оплаты.

const winePrice = 350;
const icecreamPrice = 85;
const saladPrice = 120;
const meatPrice = 190;
const juicePrice = 63;

let peopleCount = 3;
let basePrice = winePrice * 2 + icecreamPrice * 3 + saladPrice * 2 + meatPrice * 5 + juicePrice * 2;
let perPeople = basePrice / peopleCount;
let comment = perPeople >= 1000 ? 'It is sad' : 'It is happy';

console.log(`Total cost of the check - ${basePrice}p.`);
console.log(`Payment for one person - ${perPeople}p. ${comment}.`);