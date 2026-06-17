// case: В массиве errorLogs копятся строки с ошибками. В UI-компоненте (например, во всплывающем тосте) мы хотим показать только последние 3 ошибки, не удаляя их из основного массива и не создавая тяжелых вычислений.

const errorLogs = ["Error 404", "Error 500", "Error 502", "Error 503", "Error 504"];

function showLastErrorLogs (array, limit = 3) {
    return array.slice(-limit);
}
console.log(showLastErrorLogs(errorLogs));