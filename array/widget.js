// case: виджет для банка. Тебе нужно показать пользователю его самую первую (самую старую) транзакцию и самую последнюю (свежую).

const transactions = [150, 300, 50, 1200, 75];  // all trunsaction

function widgetOfTransaction (arrayOfTrunsaction) {
    let lastTransaction = arrayOfTrunsaction[arrayOfTrunsaction.length -1];
    let firstTransaction = arrayOfTrunsaction[0];
    
    return [firstTransaction, lastTransaction];
}

console.log(widgetOfTransaction(transactions));