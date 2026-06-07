// case: Мы не можем показывать кнопку "Удалить сайт" кому попало. Нужно проверить, что пользователь залогинен, у него есть права админа, и он НЕ заблокирован.

let isLoggedIn = true;        // Пользователь вошел в систему
let isAdmin = false;          // Является ли он админом
let isBanned = false;         // Забанен ли он

let canSeeAdminPanel = (isLoggedIn && isAdmin && !isBanned) ? "Can see admin-panel" : "Cant see admin-panel";
console.log(canSeeAdminPanel);