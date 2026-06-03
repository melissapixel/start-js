// case: Ты делаешь фичу для интернет-магазина. Маркетинг сказал: "Если корзина больше 5000 рублей, доставка бесплатная. ИЛИ если у пользователя есть промокод 'GIFT', доставка тоже бесплатная. Иначе доставка стоит 500 рублей".

let cartTotal = 4000;
let hasPromocode = 1;
let shippingCost = 500;

if (cartTotal > 5000) {
    shippingCost = 0;
    console.log("Доставка бесплатна!");
} else if (hasPromocode == true) {
    shippingCost = 0;
    console.log("Доставка бесплатна!");
}
else {
    shippingCost = 500;
    console.log(`Стоимость доставки: ${shippingCost}`);
}