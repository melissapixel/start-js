// case: Пользователь зашел на сайт. Если он авторизован, кнопка в углу должна говорить "Выйти". Если нет — "Войти". Писать ради этого 5 строк if/else — это моветон.

let isLoggedIn = false;

let buttonText = isLoggedIn ? "Log out" : "Log in";
console.log(buttonText);