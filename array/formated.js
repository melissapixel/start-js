// case: Пользователь вводит номер своей банковской карты или промокод в инпут. Но мы храним его в базе без пробелов и дефисов (сплошной строкой). Когда мы выводим этот номер в интерфейсе (например, в истории платежей), нам нужно визуально разделить его на блоки, чтобы пользователю было удобно читать.

const rawPromoCode = "A7F9B2X1";

function formatedSecret (secret) {
    const chars = [...secret];
    const formForUser = chars.join('-');
    return formForUser;
}

console.log(formatedSecret(rawPromoCode));