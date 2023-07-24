export default class PasswordGenerator {
  number() {
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const random = Math.round(Math.random() * (number.length - 1))

    return number[random]
  }

  upper() {
    const upper = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]

    const random = Math.round(Math.random() * (upper.length - 1))

    return upper[random]
  }

  lower() {
    const lower = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]

    const random = Math.round(Math.random() * (lower.length - 1))

    return lower[random]
  }

  symbol() {
    const symbol = ['!', '@', '#', '$', '%', '&', '*', '^']

    const random = Math.round(Math.random() * (symbol.length - 1))

    return symbol[random]
  }

  generator(numUser, array) {
    let arrayPass = []
    let final = ''
    let arrayNumbers = array

    for (let i = 0; i < numUser; i++) {
      let random = Math.round(Math.random() * (arrayNumbers.length - 1))
      arrayPass.push(arrayNumbers[random])
    }

    for (let i = 0; i < numUser; i++) {
      if (arrayPass[i] === 1) final += this.number()
      else if (arrayPass[i] === 2) final += this.upper()
      else if (arrayPass[i] === 3) final += this.lower()
      else final += this.symbol()
    }

    return final
  }
}
