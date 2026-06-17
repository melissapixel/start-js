// case: В React/Redux (или любом другом стейт-менеджере) нельзя мутировать исходный стейт напрямую. Когда пользователь открывает модалку настроек, нам нужно создать копию массива настроек, чтобы он мог менять "черновик", а оригинал изменился только при нажатии кнопки "Сохранить".

// need вернуть new copu of set, not chabnge original
const userSettings = ["Тема: Темная", "Уведомления: Вкл", "Язык: Русский"];

function createSettingsDraft(arrayOriginal) {
    return arrayOriginal.slice();
}

console.log(createSettingsDraft(userSettings));