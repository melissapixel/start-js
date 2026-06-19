// Контекст: Мы пишем новый фронтенд, но бэкенд у нас старый и написан на каком-нибудь PHP 5. Вместо нормального JSON он отдает статусы пользователей одной длинной строкой, где данные разделены символом пайп |, а ключ от значения — двоеточием :

const legacyUserData = "id:104|name:John|role:admin|status:active";

function formatDataOfUser (data, char_sep, char_join) {
    let sep = data.split(char_sep);
    let together = sep.join(char_join);
    return together;
}

console.log(formatDataOfUser(legacyUserData, "|", ", "));