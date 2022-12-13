const currentNumberDisplay = document.querySelector('#currentNumber')
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const line = document.querySelector('#line')
const pointer = document.querySelector('#pointer')

// disable touch functionality
const wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('touchstart', e => {
    e.preventDefault()
}) 

let currentNumber = 0

// change number if pos of neg
function changeNumberStyle(color, xShift) {
    currentNumberDisplay.style.color = color
    currentNumberDisplay.style.transform = `translateX(${xShift}px)`
}

// update number value and style
function updateNumber() {
    let offset = currentNumber + 10

    currentNumberDisplay.innerHTML = currentNumber
    if(currentNumber === 0) changeNumberStyle('#FAF8F6', 0)
    if(currentNumber > 0) changeNumberStyle('green', 0)
    if(currentNumber < 0) changeNumberStyle('red', -20)
    pointerBlockArr.forEach(block => block.innerText = '')
    pointerBlockArr[offset].innerText = '👆'
    
    // line filling
    numberBlockArr.forEach((block, index) => {
        if (offset > 10) {
            for(let i = offset; i > 10; i--) {
                numberBlockArr[i].style.backgroundColor = 'green'
                if (index > offset) numberBlockArr[index].style.backgroundColor = ''
            }
        }
        if (offset < 10) {
            for(let i = offset; i < 10; i++) {
                numberBlockArr[i].style.backgroundColor = 'red'
                if (index < offset) numberBlockArr[index].style.backgroundColor = ''
            }
        }
        if (currentNumber === 0) {
            numberBlockArr.forEach(block => block.style.backgroundColor = '')
        }
    })
}

// increment number
minusBtn.addEventListener('pointerdown', e => {
    if(currentNumber < -9) return
    currentNumber--
    updateNumber()
})

// decrement number
plusBtn.addEventListener('pointerdown', e => {
    if(currentNumber > 9) return
    currentNumber++
    updateNumber()
})

// populate number line
let numberBlockArr = new Array

for(let i = -10; i <= 10; i++) {
    const numberBlock = document.createElement("span")
    numberBlock.classList.add('line-number')
    numberBlock.innerText = i
    numberBlockArr.push(numberBlock)
    line.appendChild(numberBlock)
}

// populate pointer line
let pointerBlockArr = new Array

for(let i = -10; i <= 10; i++) {
    const pointerBlock = document.createElement("span")
    pointerBlock.classList.add('pointer-block')
    if (i == 0) pointerBlock.innerText = '👆'
    pointerBlockArr.push(pointerBlock)
    pointer.appendChild(pointerBlock)
}

// TODO - make numberline current number stand out (disappear - float to top?)
// TODO - add transition and animations
// TODO - refactor js
// TODO - polish homepage and make sure all conditions are met