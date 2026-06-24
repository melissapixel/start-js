// case: У нас есть массив ID пользователей из базы данных. Но когда мы отправляем их в новый API, бэкенд требует, чтобы каждый ID имел префикс user_. Иначе API вернет ошибку.

const userIds = [101, 205, 342, 418];

const userIdsForApi = userIds.map((id) => {
    return `user_${id}`;
});

console.log(userIdsForApi);