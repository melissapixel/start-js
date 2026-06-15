// case: есть массив ID пользователей, у которых сейчас активна сессия на сервере. При каждом запросе нужно быстро проверить, имеет ли пользователь право на действие.

let activeSessions = [2322, 9594, 9032, 3432, 7520];    // array with ID of users (wich in session)
let targetUserId = 3432;

function checkAccess (sessions, userId) {
    return sessions.includes(userId);
}

console.log(checkAccess(activeSessions, 9594));