// case: Ты пишешь форму регистрации. У тебя есть отдельная валидация для поля "Имя" и для поля "Email". Каждая возвращает массив объектов с ошибками. Тебе нужно собрать все ошибки в один массив, чтобы показать их пользователю в виде "тоста" (всплывающего уведомления).

const nameErrors = [
  { field: 'name', message: 'Имя слишком короткое' }
];

const emailErrors = [
  { field: 'email', message: 'Неверный формат' },
  { field: 'email', message: 'Email уже занят' }
];

const allErrors = nameErrors.concat(emailErrors);
console.log(allErrors);

// check of original
console.log(emailErrors);           // good. Original array не мутируется