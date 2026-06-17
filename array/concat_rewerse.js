// case: Пользователь зашел в магазин, положил в корзину 2 товара. Потом вернулся на следующий день и добавил еще 3. У тебя есть два массива — "старая корзина" и "новая партия товаров".

const oldCart = ['Футболка', 'Джинсы'];
const newItems = ['Кроссовки', 'Носки', 'Ремень']
console.log(oldCart.concat(newItems));


// case: API вернул тебе комментарии в порядке их создания (сначала старые, потом новые). Но в UI мы хотим, чтобы самый свежий комментарий был сверху.
const commentsFromApi = [
  'Первый коммент от Васи',
  'Ответ от Пети',
  'Свежий коммент от Маши'
];

function showCommentsToOld (array) {
    let copy = array.slice();
    return copy.reverse();
}
console.log(showCommentsToOld(commentsFromApi));
console.log(commentsFromApi);           // get original array


// case: feed.
// Сначала пользователь открыл приложение, ты подгрузил первую порцию постов (page1).
// Он доскроллил до конца, ты подгрузил вторую (page2).
// Нужно склеить их в одну ленту.
// НО! API отдает посты от старых к новым, а в ленте мы хотим видеть сначала самое свежее.
const page1 = ['Пост про кота', 'Пост про кофе', 'Пост про код'];
const page2 = ['Пост про отпуск', 'Пост про еду'];
const feed = page1.concat(page2);
console.log(feed.reverse());