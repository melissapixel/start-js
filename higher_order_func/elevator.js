// Ты пишешь логику для лифта. У тебя есть функция, которая проверяет, на каком этаже сейчас лифт и на какой этаж его вызвали.
// Но лифт не знает, что делать после поездки. Может, нужно открыть двери. Может, нужно включить музыку. Может, нужно позвонить диспетчеру.

function callElevator(currentFloor, targetFloor, onArrival) {
    if (currentFloor < targetFloor) {
        console.log(`I'm going from ${currentFloor} to ${targetFloor}, I'll travel ${targetFloor - currentFloor} floors`);
        return onArrival();
    }
    else {
        console.log(`I'm going from ${currentFloor} to ${targetFloor}, I'll travel ${currentFloor - targetFloor} floors`);
        return onArrival();
    }
}

function onArrival () {
    return `Ready`;
}

console.log(callElevator(3, 7, onArrival));