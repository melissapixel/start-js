// case:  К нам в систему заходит пользователь. В зависимости от его роли мы показываем ему разный интерфейс (опять же, пока просто текстом в консоль).

// Твой switch здесь:
// если "admin" -> "Добро пожаловать, Шеф! Доступен полный контроль системы."
// если "editor" -> "Привет! Ты можешь создавать и редактировать статьи."
// если "viewer" -> "Привет! Ты можешь только читать контент."
// если "guest" -> "Пожалуйста, зарегистрируйтесь, чтобы увидеть больше."
// для всех остальных -> "Ваша роль не распознана."

let userRole = "editor"; // Варианты: "admin", "editor", "viewer", "guest"
let message;

switch (userRole) {
    case "admin":
    case "editor":
        message = "Hello! You can create and edit articles.";
        break;
    case "viewer":
        message = "Hello! You can only read the content.";
        break;
    case "guest":
        message = "Please register to see more.";
        break;
    default:
        message = "Your role is not recognized.";
}

console.log(message);