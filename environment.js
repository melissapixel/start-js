// Перед запуском приложения нам нужно понять, где мы сейчас находимся: в разработке, на тестовом сервере или в реальном мире (продакшен). От этого зависят, например, адреса баз данных (но мы пока просто выведем сообщение).

// Твой switch здесь:
// если "development" -> "Режим разработчика: включены все логи и отладка."
// если "staging" -> "Тестовый сервер: данные фейковые, но всё работает как в жизни."
// если "production" -> "БОЕВОЙ РЕЖИМ: никаких шуток, работаем аккуратно!"
// если что-то другое -> "Неизвестное окружение. Остановка запуска."

const environment = "staging"; // Варианты: "development", "staging", "production"
let message;

switch (environment) {
    case "development":
        message = "Developer mode: all logs and debugging are enabled.";
        break;
    case "staging":
        message = "Test server: the data is fake, but everything works as in life.";
        break;
    case "production":
        message = "BATTLE MODE: no jokes, work carefully!";
        break;
    default:
        message = "Unknown environment. Stop the launch.";
        break;
}

console.log(message);