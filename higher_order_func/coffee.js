// Представь, что ты пишешь логику для умной кофемашины. У тебя есть функция, которая проверяет, есть ли зёрна в кофемашине. 
// Но кофемашина не знает, что конкретно делать в каждом случае. Может, если зёрна есть — нужно сварить эспрессо. А может, нужно сварить капучино. А если зёрнет нет — может, нужно отправить уведомание бариста, а может, просто включить лампочку "нет зёрен".

function checkBeans (hasBeans, actionIfYes, actionIfNo) {
    if (hasBeans) {
        return actionIfYes();
    }
    
    return actionIfNo();
}

function makeCoffee () {
    return `The coffee is already being prepared.`;
}
function sayNoBeans () {
    return `No Beans. Contact the manager.`;
}

console.log(checkBeans(false, makeCoffee, sayNoBeans));