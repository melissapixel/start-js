// case: Пользователь заполнял форму, но что-то пошло не так — в массив попали пустые строки, null и undefined. В реальном проекте перед отправкой на сервер такие данные нужно вычистить, иначе бэкенд упадет.
// Оставь только "реальные" данные — то есть всё, что не является пустой строкой, null или undefined. Назови массив cleanData.

const formData = ['John', '', null, 'Doe', undefined, 'john@example.com', '', '25'];

const cleanData = formData.filter((data) => {
    return data;
});

console.log(cleanData);