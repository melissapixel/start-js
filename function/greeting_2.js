// case: Нам нужна функция, которая приветствует человека, но мы хотим сами решать, как именно её приветствовать (обычно, капсом или с эмодзи), не переписывая саму функцию приветствия.

const formNameOfUser = function (name) {
    return `${name}!`;
}

function greetingToUser (name) {
    let nameOfUser = formNameOfUser(name);
    return `Hi, ${nameOfUser}`;
}

console.log(greetingToUser("Mel"));