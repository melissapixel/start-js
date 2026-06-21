// case: Маркетинг прислал список email-адресов для рассылки. Но там есть мусор: пустые строки и тестовые адреса. Нам нужно собрать только валидные email в новый массив, пропуская мусор.

const rawEmails = ['user1@mail.com', '', 'test@test.com', 'admin@site.ru', '', 'hello@world.com'];

function getEmail (array) {
    let cleanEmails = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '') {
            continue;
        }
        cleanEmails += array[i];
    }

    return cleanEmails;
}

console.log(getEmail(rawEmails));