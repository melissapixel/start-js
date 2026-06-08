// case: Маркетологи придумали акцию: скидка дается, если сегодня выходной И у пользователя есть промокод, ЛИБО если это его самая первая покупка на сайте (первопроходцев мы любим!).

let isWeekend = true;
let hasPromoCode = false;
let isFirstPurchase = true;

let getsDiscount = (isWeekend && hasPromoCode) || isFirstPurchase;
console.log(getsDiscount);