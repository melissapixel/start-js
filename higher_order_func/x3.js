// case: Напиши функцию, которая принимает другую функцию как аргумент и вызывает её три раза подряд.

const WORD = 'Hello';

function printWord (word) {
    console.log(word);
}

function getPrintWord (funcWord, word) {
    funcWord(word);
    funcWord(word);
    funcWord(word);
}

getPrintWord(printWord, WORD);