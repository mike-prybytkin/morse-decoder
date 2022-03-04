const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const dot = "10";
  const dash = "11";
  const space = "**********";
  const letterLength = 10;
  let result = "";

  let i = 0;
  do {
    let j = i + letterLength;
    let letter = expr.slice(i, j);
    let morseLetter = "";

    if (letter !== space) {
      for (let k = letter.length - 1; k >= 0; k -= 2) {
        let sumbol = `${letter[k - 1]}${letter[k]}`;

        if (sumbol === dot) {
          morseLetter = `.${morseLetter}`;
        } else if (sumbol === dash) {
          morseLetter = `-${morseLetter}`;
        } else if (sumbol === "00") {
          break;
        }
      }
    }

    if (MORSE_TABLE[morseLetter] === undefined) {
      result += ` `;
    } else {
      result += `${MORSE_TABLE[morseLetter]}`;
    }

    i += letterLength;
  } while (i < expr.length);
  return result;
}

module.exports = {
  decode,
};
