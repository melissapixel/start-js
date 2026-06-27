// // Контекст: Ты делаешь форму регистрации на сайте. Чтобы не пускали спам-ботов с одноразовых почт, у нас есть список запрещенных доменов.
// Извлеки из userEmail домен (часть после @). Подсказка: у строк есть метод .split('@'), который возвращает массив из двух частей.
// С помощью find проверь, есть ли этот домен в черном списке.
// С помощью findIndex найди его индекс в списке (пригодится, если захочешь потом добавить его в "вечный бан").

const bannedDomains = ['mailinator.com', 'tempmail.org', 'guerrillamail.com', 'yopmail.com'];
const userEmail = 'spammer123@tempmail.org';

function checkEmail (banDomains, userEmail) {
    let domen = userEmail.split('@');

    if (banDomains.includes(domen[1])) {
        return banDomains.findIndex ((item) => {
            return item === domen[1];
        });
    }
    return domen[1];
}
console.log(checkEmail(bannedDomains, userEmail));