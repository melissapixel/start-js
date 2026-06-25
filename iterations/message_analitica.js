// case: У тебя есть список событий, которые произошли на сайте. Каждое событие нужно "отправить" в систему аналитики. В реальности это был бы запрос на сервер, но мы пока просто будем логировать в консоль.

const events = ['page_view', 'click_button', 'add_to_cart', 'checkout'];

function showEventLog (arrLog, message) {
    arrLog.forEach(log => {
        console.log(`${message}: ${log}`);
    });
}

showEventLog(events, "New event");