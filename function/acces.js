// case: У нас есть контент "18+". Нам нужно быстро проверить, можно ли показать его пользователю, исходя из его возраста.

function checkAgeToContent(age) {
    if (typeof(age) !== "number") {
        return false;
    }
    if (age >= 18) {
        return true;
    }
    return false;
}

if (checkAgeToContent("21")) {
    console.log("Show content +18");
}