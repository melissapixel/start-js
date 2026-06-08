// case: Бэкенд присылает нам "голую" цифру (например, 1500), а на фронте нам нужно показать её красиво, с валютой, чтобы пользователь не испугался.

function getFormattedPrice(price, currency) {
    return Number(price) + " " + currency;
}

console.log(getFormattedPrice(1500, "$"));