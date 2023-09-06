const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = '';
    let arr = [];
    for (i = 0; i < expr.length; i = i + 2) {
      expr[i] === '0' ? result += '' :
      expr[i] === '*' ? result = ' ' :
      expr[i + 1] === '0' ? result += '.' : result += '-';
      if (String(i).endsWith('8')) {
        arr[Math.floor(i / 10)] = result;
        result = '';
      }
    }

    const str = arr.map(toDoText).join().replace(/,/g, '');
    return str;
}

const toDoText = (item) => {
  if (item === ' ') return ' ';
  else return MORSE_TABLE[item];
}

module.exports = {
    decode
}
