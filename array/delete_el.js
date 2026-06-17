// case:  Бэкенд возвращает массив данных для таблицы, но в нем есть "мусор": нулевой элемент — это метаданные (заголовки таблицы), а самый последний элемент — это информация о пагинации. Нам нужны только чистые строки таблицы между ними.

const rawData = [
  { type: "header", columns: ["Name", "Age"] }, 
  { name: "Alice", age: 25 },              
  { name: "Bob", age: 30 },                   
  { name: "Charlie", age: 35 },               
  { type: "footer", total: 3 }           
];

function showRowsOfTable (array) {
    // need delete first and last el
    array.splice(0, 1);    // delete first el
    array.splice(-1);
    return array;
}

console.log(showRowsOfTable(rawData));