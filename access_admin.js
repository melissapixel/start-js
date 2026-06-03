// access to admin panel
// Самый классический кейс. У нас есть система, и не все пользователи должны видеть кнопку "Удалить весь сайт". Нам нужно проверить, залогинен ли пользователь и какая у него роль.

// input date
let isLog = true;
let userRole = "manager";
let message = "";

// Правила доступа:
// 1. Если пользователь НЕ залогинен (!isLoggedIn) -> выводим в консоль: "Сначала войдите в систему!"
// 2. Если он залогинен, И его роль "admin" -> выводим: "Добро пожаловать в панель управления, босс!"
// 3. Если он залогинен, И его роль "manager" -> выводим: "Доступ разрешен, но только к отчетам."
// 4. Во всех остальных случаях (например, "guest") -> выводим: "У вас нет прав для просмотра этой страницы."

if (!isLog) {
    message = "Log in system, Please.";
} else if (isLog && userRole === "admin") {
    message = "Hello, boss!";
} else if (isLog && userRole === "manager") {
    message = "Access, but only read.";
} else {
    message = "Not access";
}

console.log(message);