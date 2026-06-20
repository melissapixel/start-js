// case: Есть массив с координатами точки. Распакуй его в две переменные x и y.
const point = [42, 100];
const [x, y] = point;

console.log(x);


// case: Есть массив [имя, возраст, email, телефон]. Тебе нужны только name и email. Возраст и телефон — пропусти через запятые.
// const user = ['Алиса', 25, 'alice@mail.com', '+79991234567'];
// const [name, , email, ] = user;
// console.log(name, email);


// case: Сервер прислал настройки, но мог забыть некоторые. Распакуй массив в theme, lang и fontSize. Если чего-то нет — пусть будут значения по умолчанию: 'light', 'ru', 14.
const settings = ['dark']; // сервер прислал только тему
const [theme = 'light', lang = 'ru', fonsize = 14] = settings;
console.log(theme);
console.log(fonsize);


// case: Есть список покупок. Первый элемент — это главный продукт (хлеб), а всё остальное — мелочёвка. Распакуй так, чтобы main был первым элементом, а rest — массивом всего остального.
const shoppingList = ['хлеб', 'молоко', 'яйца', 'сыр', 'помидоры'];
const [main, ...other] = shoppingList;
console.log(main);
console.log(other);


// case: Есть массив, где третий элемент — это тоже массив (координаты внутри). Распакуй так, чтобы id был первым элементом, name — вторым, а coords — третьим (как массив из двух чисел).
const marker = [101, 'Кафе', [55.75, 37.61]];
const [id, name, coord] = marker;
console.log(id, name, coord);