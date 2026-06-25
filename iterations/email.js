// case: В реальном проекте к нам на бэкенд приходит список email-адресов от пользователей при массовом импорте. Часть из них — мусор (люди опечатались). Оставь только те строки, которые реально похожи на email (содержат символ @). Назови массив validEmails

const rawEmails = [
    'user@mail.com', 
    'invalid-email', 
    'test@gmail.com', 
    'no-at-sign', 
    'hello@yandex.ru', 
    'just_text',
    'admin@company.org'
];

const validEmails = rawEmails.filter((email) => {
    return email.includes('@');
})

console.log(validEmails);