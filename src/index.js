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

module.exports = function decode(expr) {
  const letters = [];
  const blockSize = 10;
  for (let i = 0; i < expr.length; i += blockSize) {
    letters.push(expr.slice(i, i + blockSize));
  }

  const lastPart = expr.length % blockSize;
  if (lastPart > 0) {
    letters.push(expr.slice(-lastPart));
  }

  const res = [];
  for (let i = 0; i < letters.length; i += 1) {
    const letter = letters[i];
    if (letter === '**********') {
      res.push(' ');
    } else {
      const morse = [];
      for (let j = 0; j < letter.length; j += 2) {
        const code = letter.slice(j, j + 2);
        if (code === '10') morse.push('.');
        if (code === '11') morse.push('-');
      }
      res.push(MORSE_TABLE[morse.join('')]);
    }
  }

  return res.join('');
};
