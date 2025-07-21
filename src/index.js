module.exports = function toReadable(num) {
  const digits = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',

    100: 'hundred',
  };
  const tens = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  if (num <= 20) {
    return digits[num];
  }

  let string = '';
  const number = num.toString();

  if (number.length === 2) {
    for (let i = 0; i <= number.length - 1; i += 1) {
      const char = number[i];
      if (i === 0) {
        string += `${tens[`${char}0`]} `;
      }
      if (i === 1) {
        if (number[i] !== '0') {
          string += digits[char];
        }
      }
    }
  }

  if (number.length === 3) {
    if (number[1] === '0' && number[2] === '0') {
      string += `${digits[number[0]]} hundred`;
    } else if (number[1] === '0') {
      string += `${digits[number[0]]} hundred ${digits[number[2]]}`;
    } else if (number[1] === '1') {
      string += `${digits[number[0]]} hundred ${digits[number.slice(1)]}`;
    } else {
      string += `${digits[number[0]]} hundred `;

      const pseudoTens = number.slice(1);
      for (let i = 0; i <= pseudoTens.length - 1; i += 1) {
        const char = pseudoTens[i];
        if (i === 0) {
          string += `${tens[`${char}0`]} `;
        }
        if (i === 1) {
          if (pseudoTens[i] !== '0') {
            string += digits[char];
          }
        }
      }
    }
  }

  if (string[string.length - 1] === ' ') {
    string = string.slice(0, string.length - 1);
  }
  return string;
};

// function toReadable(num) {
//   if (num === 120) {
//     console.log('!');
//   }
//   const digits = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     10: 'ten',
//     11: 'eleven',
//     12: 'twelve',
//     13: 'thirteen',
//     14: 'fourteen',
//     15: 'fifteen',
//     16: 'sixteen',
//     17: 'seventeen',
//     18: 'eighteen',
//     19: 'nineteen',
//     20: 'twenty',

//     100: 'hundred',
//   };
//   const tens = {
//     10: 'ten',
//     20: 'twenty',
//     30: 'thirty',
//     40: 'forty',
//     50: 'fifty',
//     60: 'sixty',
//     70: 'seventy',
//     80: 'eighty',
//     90: 'ninety',
//   };

//   if (num <= 20) {
//     return digits[num];
//   }

//   let string = '';
//   const number = num.toString();

//   if (number.length === 2) {
//     for (let i = 0; i <= number.length - 1; i += 1) {
//       const char = number[i];
//       if (i === 0) {
//         string += `${tens[`${char}0`]} `;
//       }
//       if (i === 1) {
//         if (number[i] !== '0') {
//           string += digits[char];
//         }
//       }
//     }
//   }

//   if (number.length === 3) {
//     if (number[1] === '0' && number[2] === '0') {
//       string += `${digits[number[0]]} hundred`;
//     } else if (number[1] === '0') {
//       string += `${digits[number[0]]} hundred ${digits[number[2]]}`;
//     } else if (number[1] === '1') {
//       string += `${digits[number[0]]} hundred ${digits[number.slice(1)]}`;
//     } else {
//       string += `${digits[number[0]]} hundred `;

//       const pseudoTens = number.slice(1);
//       for (let i = 0; i <= pseudoTens.length - 1; i += 1) {
//         const char = pseudoTens[i];
//         if (i === 0) {
//           string += `${tens[`${char}0`]} `;
//         }
//         if (i === 1) {
//           if (pseudoTens[i] !== '0') {
//             string += digits[char];
//           }
//         }
//       }
//     }
//   }

//   if (string[string.length - 1] === ' ') {
//     string = string.slice(0, string.length - 1);
//   }
//   return string;
// }
// console.log(toReadable(120));
