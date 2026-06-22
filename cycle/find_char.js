const errorLog = "Connection timeout: database is not responding";
const CHAR_FOIND = 's';

let charCount = 0;

for (const char of errorLog) {
    if (char === CHAR_FOIND) {
        charCount++;
    }
}
console.log(charCount);