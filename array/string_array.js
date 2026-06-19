// case: У нас есть строка, в которой через запятую и пробел перечислены роли в команде. Тебе нужно превратить её в массив, чтобы мы могли потом работать с каждым участником отдельно.
const teamRoles = "дизайнер, фронтенд, бэкенд";
const teamRolesArray = teamRoles.split(', ');
console.log(teamRolesArray);
console.log(teamRoles);                         // check original



// case: Мы собрали теги для новой задачи в Jira. Теперь нам нужно склеить их в одну строку, разделив дефисом (это называется kebab-case, часто используется в URL или классах CSS).
const taskTags = ["срочно", "баг", "авторизация"];
const tagsString = taskTags.join('-');
console.log(tagsString);

// case: Тебе нужно разобрать рекламный слоган на отдельные символы (буквы и эмодзи), чтобы потом анимировать их появление на экране по одному. Помнишь, почему split("") тут не подойдет? Используем правильный метод!
const slogan = "код 🚀";
const charArray = [...slogan];
console.log(charArray);