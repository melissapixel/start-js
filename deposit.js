/*
    Вася положил 12 000 на вклад 7% годовых
    с капитализацией 1 раз в месяц.
    
    Сможет ли он купить дом за 13 500
    через 2 года после снятия вклада.
*/

let many = 12000;
let yearCount = 2;
let contribution = 7;
let cap = contribution / 100;

let result = many * (1 + cap/12) ** (12*yearCount);

let buy = 13500;
if (result >= buy){
    let buyIs = true;
    let balanse = result - buy;
    let message = `U may bue it. Later balanse is ${balanse}`;
} else {
    let buyIs = false;
    let message = `U dont may bue it!`;
}

console.log(message);

// let capitalizationInMouth = contribution / 12;
// let mounthCount = 12 * yearCount; 

// let mainCapitalization = capitalizationInMouth * mounthCount;

// let capitalizationMany = many / mainCapitalization;
// let many1 = many + capitalizationMany;
// let allMany = many1 * 0.07;

// let price = 13500;


// console.log({capitalizationMany});
// console.log({many1});
// console.log({allMany});