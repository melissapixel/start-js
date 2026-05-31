/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const hourRate = 80;
const hourLimit = 5;         // кроме выходных

let DayNow;

// data of client
let hourWork = 234;

let salary = hourWork * hourRate;

let daySpent = Math.ceil(hourWork / hourLimit);
let fullDaily = Math.ceil(daySpent / 5);               // количество РАБОЧИХ недель
let dayOffCount = Math.ceil(fullDaily * 2);
let timeWork = daySpent + dayOffCount;


console.log(`Cost of work: ${salary}.`);
console.log(`Количество затраченных дней: ${daySpent}, не считая выходные`);
console.log(`Количество затраченных недель: ${fullDaily}`)
console.log(`Количество выходных: ${dayOffCount}`);
console.log(`Количество затраченных дней на работу: ${timeWork}`)







