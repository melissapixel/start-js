// case: Мы делаем дашборд, и когда пользователь заходит в систему, мы хотим показать ему дружелюбное сообщение, используя его имя.

function personalGreeting(name) {
    let nameOfUser = name || "Default Name";
    return `Hi, ${nameOfUser}`;
}

console.log(personalGreeting("Mel"));