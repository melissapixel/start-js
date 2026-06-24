// case: В админке есть кнопка "Разослать новости подписчикам". У нас есть массив email-адресов. В реальности тут ушел бы запрос на сервер, но пока мы просто эмулируем этот процесс — "отправляем" письмо каждому адресату и логируем успех.

const emails = ["ivan@mail.ru", "anna@gmail.com", "petr@yandex.ru"];

function sendEmails (arr) {
    arr.forEach(email => {
        console.log(`Send on ${email}`);
    });
}

sendEmails(emails);