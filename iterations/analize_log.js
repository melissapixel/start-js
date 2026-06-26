// case: Сервер возвращает время ответа (в миллисекундах) для каждого запроса. Нужно:

    // Отфильтровать "медленные" запросы (больше 500мс) — но filter ты еще не проходила, так что используй reduce для этого.
    // Посчитать их количество.
    // Посчитать их общее время (сумму).

const responseTimes = [120, 650, 230, 890, 45, 1200, 340, 560];


function getLogSlowlyRes (resArr) {
    
    let total = 0;
    let count = 0;

    resArr.filter ((item) => {
        if (item > 500) {
            total += item;
            count++;
        }
    })
    return `Sum: ${total} m/s
     Count: ${count}`;

}

console.log(getLogSlowlyRes(responseTimes));