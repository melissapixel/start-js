// При загрузке страницы ты получил историю сообщений из REST API (historyMessages).
// Пока пользователь читал, прилетели новые сообщения через WebSocket (wsMessages).
// Тебе нужно склеить их. НО! История от API пришла в старом порядке, а новые сообщения надо добавить в конец. При этом исходный массив historyMessages трогать нельзя (вдруг он используется в другом компоненте!).

// Пришло с API (от старых к новым)
const historyMessages = [
  { id: 1, text: 'Старое сообщение' },
  { id: 2, text: 'Сообщение вчера' }
];

// Пришло по WebSocket (свежие)
const wsMessages = [
  { id: 3, text: 'Привет!' },
  { id: 4, text: 'Как дела?' }
];

function getFeed (arrayApi, arrayWebsocket) {
    return [...arrayApi].reverse().concat(arrayWebsocket);
}

console.log(getFeed(historyMessages, wsMessages));

// ckeck original
console.log(historyMessages);