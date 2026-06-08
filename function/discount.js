// case: Маркетологи придумали акцию "Скидка 20% на всё!", и им нужен быстрый способ узнать итоговую цену, чтобы повесить правильный ценник.

function priceAfterDiscount(basePrice, discountRate) {
    if (discountRate > 0 && discountRate < 100) {
        let discount = discountRate / 100;
        let saved = basePrice * discount;
        let price = basePrice - saved;

        return price;
    }
    return "Input correctly discount";
}

console.log(priceAfterDiscount(1000, 80));