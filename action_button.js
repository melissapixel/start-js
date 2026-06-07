// case: У нас есть форма заказа. Кнопка "Оплатить" должна быть активна (true) только тогда, когда пользователь ввел email, ввел пароль и пароль совпадает с подтверждением. Если хоть одно условие ложно — кнопка неактивна (false). Это классическая валидация!

// Напиши выражение для переменной isSubmitButtonActive, используя операторы, чтобы она стала true только при выполнении ВСЕХ условий одновременно.

let isEmailFilled = true;
let isPasswordFilled = true;
let isPasswordMatch = false; // Упс, пользователь ошибся при вводе

let isSubmitButtonActive = isEmailFilled && isPasswordFilled && isPasswordMatch;
console.log(isSubmitButtonActive);