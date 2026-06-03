// case:  Пользователь регистрируется на сайте. Нам нужно проверить его пароль и вывести понятное сообщение, чтобы он не тупил, почему его не пускают.

// Условия от бизнеса:
// 1. Если длина меньше 6 символов -> message = "Пароль слишком короткий!"
// 2. Если длина от 6 до 9 символов (включительно) -> message = "Пароль средний, но можно лучше."
// 3. Если длина 10 и больше -> message = "Отличный, надежный пароль!"


let password = "d2kd2kd2kd2k";
let message = "";       // Later message for user

if (password.length < 6) {
    message = "Password is short.";
} else if (password.length >= 6 && password.length <= 9) {
    message = "Password is middle.";
} else if (password.length >= 10) {
    message = "Good password.";
}

console.log(`${message} Length of password: ${password.length}`);
