// case: Пользователь нажал кнопку "Удалить" на товаре в корзине. Нам нужно удалить его из массива состояния и показать уведомление с названием удаленного товара
const cart = [
  { id: 1, name: "Ноутбук", price: 1000 },
  { id: 2, name: "Мышка", price: 50 },
  { id: 3, name: "Клавиатура", price: 100 }
];
function removeFromCart(cart, index) {
    let deleteInCart = cart.splice(index, 1);
    
    console.log(`Delete from cart: ${deleteInCart}`);
    console.log(cart);
}
removeFromCart(cart, 1)