// case: У нас есть относительные пути к картинкам (например, из CMS). Но чтобы они загрузились на сайте, нужно добавить в начало адрес нашего CDN-сервера.

const imagePaths = ['/img/logo.png', '/img/banner.jpg', '/img/avatar.svg'];
const BASE_URL = 'https://cdn.site.com';

function getUrlOfImg (urlOfSite, allUrlOfImg) {
    return allUrlOfImg.map((item) => {
        return `${urlOfSite}${item}`;
    });
}

console.log(getUrlOfImg(BASE_URL, imagePaths));