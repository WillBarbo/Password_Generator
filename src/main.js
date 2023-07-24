import PasswordGenerator from './modules/PasswordGenerator'

import './assets/css/style.css'

let arrayNum = [1, 2, 3, 4]

let numUser2 = (document.querySelector('.char').value = 11)
let numUser = Number(document.querySelector('.char').value)
let copiedPass = ''
const power = document.getElementById('levelPower')
const img = document.querySelector('#copy')
let slider = document.getElementById('myRange')

runPasswordGenerator(arrayNum, numUser2)

slider.oninput = function () {
  document.querySelector('.char').value = this.value
  numUser2 = document.querySelector('.char').value
  runPasswordGenerator(arrayNum, numUser2)
  levelPower()
}

document.addEventListener('click', e => {
  const el = e.target

  numUser2 = document.querySelector('.char').value

  if (Number(numUser2) > 25) {
    numUser2 = document.querySelector('.char').value = '25'
  } else if (Number(numUser2) < 1) {
    numUser2 = document.querySelector('.char').value = '1'
  }

  slider.value = numUser2

  if (el.classList.contains('slider')) {
    document.querySelector('.char').value = slider.value
  }

  numUser2 = Math.round(document.querySelector('.char').value)
  document.querySelector('.char').value = numUser2

  if (el.classList.contains('num')) {
    classContains(1, '.num')
  } else if (el.classList.contains('upper')) {
    classContains(2, '.upper')
  } else if (el.classList.contains('lower')) {
    classContains(3, '.lower')
  } else if (el.classList.contains('symbol')) {
    classContains(4, '.symbol')
  } else if (el.classList.contains('submit')) {
    e.preventDefault()
    runPasswordGenerator(arrayNum, numUser2)
    numUser = numUser2
  } else if (numUser !== numUser2) {
    runPasswordGenerator(arrayNum, numUser2)
    numUser = numUser2
  }

  levelPower()

  if (el.classList.contains('copy')) {
    navigator.clipboard.writeText(copiedPass).then(() => {
      img.setAttribute('src', '/src/assets/img/checkMark.gif')
      img.classList.remove('copy')
      setTimeout(function () {
        img.setAttribute('src', '/src/assets/img/imageCopy.jpg')
        img.classList.add('copy')
      }, 2900)
    })
  }
  if (el.classList.contains('reload')) {
    const element = document.getElementById('reload')
    element.classList.add('generate')
    setTimeout(function () {
      element.classList.remove('generate')
    }, 600)
    runPasswordGenerator(arrayNum, numUser2)
  }
})

function levelPower() {
  if (Number(numUser2) > 10) {
    power.classList.add('power4')
  } else if (Number(numUser2) > 8) {
    power.classList.remove('power4')
    power.classList.add('power3')
  } else if (Number(numUser2) > 6) {
    power.classList.remove('power3', 'power4')
    power.classList.add('power2')
  } else if (Number(numUser2) > 3) {
    power.classList.remove('power2', 'power3', 'power4')
    power.classList.add('power1')
  } else {
    power.classList.remove('power1', 'power2', 'power3', 'power4')
    power.classList.add('power0')
  }
}

function classContains(removeNum, checkmarkClass) {
  removeCharacter(removeNum, checkmarkClass)
  runPasswordGenerator(arrayNum, numUser2)
  numUser = numUser2
  return
}

function removeCharacter(num, checkmarkClass) {
  if (arrayNum.includes(num)) {
    if (arrayNum.length !== 1) {
      const index = arrayNum.indexOf(num)
      arrayNum.splice(index, 1)
    } else {
      document.querySelector(checkmarkClass).checked = true
    }
  } else {
    arrayNum.push(num)
  }
  return
}

function runPasswordGenerator(array, numUser2) {
  const runPass = new PasswordGenerator()

  let result = document.querySelector('.result')

  copiedPass = runPass.generator(numUser2, array)
  result.textContent = copiedPass
  return
}

//console.log('lol')
