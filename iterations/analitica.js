// case: В приложении есть система аналитики, которая замеряет, сколько миллисекунд грузится каждая страница. Ты получил массив с этими замерами за день. Тебе нужно посчитать общее время загрузки и среднее время, чтобы понять, не тормозит ли сайт.

const loadTimes = [120, 340, 95, 210, 180]; // время в мс

function infoForAnalitic (infoArr, req) {
    if (req === 'total') {
        let total = 0;
        infoArr.forEach(el => {
            total += el;
        });
        return total;
    }
    
    else if (req === 'average') {
        let total = 0;
        infoArr.forEach(el => {
            total += el;
        });
        return total / infoArr.length;
    }
}

console.log(infoForAnalitic(loadTimes, 'average'));