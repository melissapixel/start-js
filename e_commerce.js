// case: делаешь интернет-магазин. Клиент смотрит свой заказ. Ему нужно показать понятный статус, а не технические данные.

// Создай переменную statusMessage. Если isDelivered равно true, сообщение должно быть "Заказ уже у вас!". Если false — "Курьер в пути, ждите".

let isDelivered = false;
let statusMessage = isDelivered ? "U have it." : "In way";
console.log(statusMessage);