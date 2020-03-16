const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arrExpr = expr.split('');
    let arrExprCount = arrExpr.length / 10;

    let finalWorld = [];

    for (let i = 0; i < arrExprCount; i++) {
        let symbolCode = [];
        for (let i = 0; i < 5; i++) {

            let currentCode = arrExpr.splice(0, 2).join('').toString();
            if (currentCode === '**') {
                symbolCode.push(' ');
            } else {
                if (currentCode === '10') {
                    symbolCode.push('.');
                } else {
                    if (currentCode === '11') {
                        symbolCode.push('-');
                    }
                }
            }
        }

        let symbol = symbolCode.join('').toString();

        if (symbolCode.join('').toString() === '     ') {
            finalWorld.push(' ');
        } else {
            finalWorld.push(MORSE_TABLE[symbol]);
        }

    }
    return finalWorld.join('').toString();
}

module.exports = {
    decode
}