// case: У нас есть массив строк-тегов. Нам нужно собрать из них HTML-строку, чтобы вставить в разметку.
const tags = ['js', 'frontend', 'html', 'css'];
let htmlString = '';

for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    htmlString += `<li>${tag}</li>`;
}

console.log(htmlString);