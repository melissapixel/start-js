// case: Наш бэкенд иногда присылает технические статусы операции, например, "success" или "error". Пользователь не поймет слово "error", ему нужно написать по-человечески.

function techStatusToUser (techStatus) {
    if (techStatus === "error") {
        return `It is mistake!`;
    }
    else if (techStatus === "success") {
        return `All is very good!`;
    }
    else {
        return `What do u want?`;
    }
}

console.log(techStatusToUser("error"));