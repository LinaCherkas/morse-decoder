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
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        result.push(expr.slice(i, i + 10));
    }
    let final = result.map(item => item.replaceAll("11", "-").replaceAll("10", ".")
        .replaceAll("0", "").replace("**********", " "))
    for (let key in MORSE_TABLE) {
        final.forEach((y, index) => {
            if (y === key) final[index] = MORSE_TABLE[key]
        })
    }
    return final.join('')
}

module.exports = {
    decode
}