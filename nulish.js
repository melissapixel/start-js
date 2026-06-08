// case: Ты делаешь настройки звука в плеере. Пользователь может выставить громкость от 0 до 100. Если он не трогал настройки, мы берем значение по умолчанию (50). Но есть нюанс: 0 — это валидное значение (пользователь хочет полную тишину), а не отсутствие значения!

const maxVolume = 100;
const defaultVolume = 50;
const minVolume = 0;

let userVolume = null;
let playVolume = Number(userVolume ?? defaultVolume);

console.log(playVolume);