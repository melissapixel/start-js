// case: Мы отрендерили 5 карточек-скелетонов (заглушек), пока грузится API. Данные для 3-й карточки (индекс 2) пришли с сервера. Нужно заменить заглушку на реальный объект, не сдвигая остальные карточки.

// replace "skeleton" => product
const items = ["🦴 Skeleton 1", "🦴 Skeleton 2", "🦴 Skeleton 3", "🦴 Skeleton 4"];
const realProduct = { id: 42, name: "iPhone 15" };

function replaceSkeleton(array, index, realData)  {
    array.splice(index, 1, realData);
    return array;
}

console.log(replaceSkeleton(items, 2, realProduct));