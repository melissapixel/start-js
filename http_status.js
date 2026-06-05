// case. Расшифровка HTTP-статусов

let statusCode = 500;
let message;

switch (statusCode) {
    case 200:
        message = "Good! Data is ready!";
        break;
    case 403:
        message = "Not access. Check ur rights.";
        break;
    case 404:
        message = "Page not found.";
        break;
    case 500:
        message = "Error on server.";
        break;
    default:
        message = "Error";
}

console.log(message);