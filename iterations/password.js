// case:В системе безопасности есть список паролей, которые пользователи пытались установить. По политике компании пароль должен:

//     быть длиннее 6 символов
//     содержать хотя бы одну цифру

let passwords = ['qwerty', 'pass123', '12345', 'hello_world', 'admin2026', 'abc', 'a1b2c3d4', 'password'];

const validePasswords = passwords.filter((password) => {
    return password.length > 6 && (
        password.includes(1) ||
        password.includes(2) ||
        password.includes(3) ||
        password.includes(4) ||
        password.includes(5) ||
        password.includes(6) ||
        password.includes(7) ||
        password.includes(8) ||
        password.includes(9) ||
        password.includes(0)
    );
});

console.log(validePasswords);