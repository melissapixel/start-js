// case: Пользователь перетащил задачу внутри одного списка (например, поднял задачу из позиции 3 на позицию 0). 

const tasks = ["Задача А", "Задача Б", "Задача В", "Задача Г"];

// REPLACE TASKS ДРУГ С ДРУГОМ
function changePlaceTask(array, fromIndex, toIndex) {
    [array[fromIndex], array[toIndex]] = [array[toIndex], array[fromIndex]];
    return array;
}

// REPLACE TASKS НА ДРУГОЕ МЕСТО
function moveTask (array, fromIndex, toIndex) {
    let el = array.splice(fromIndex);
    array.splice(toIndex, 0, el);
    return(array);
}
console.log(moveTask(tasks, 3, 0));