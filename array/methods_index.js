// character: Метод .includes() крут, но он отвечает только на вопрос "Есть ли это?". А если нам нужно знать, где это находится, чтобы удалить или исправить?

const responseTimes = [120, 450, 1200, 300, 800];

function findSlowResponse(array, el) {
    let index = array.indexOf(el);
    if (index === -1) {
        return `Not found`;
    }
    return `It is index ${index}`;
}

console.log(findSlowResponse(responseTimes, 450));