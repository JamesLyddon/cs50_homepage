const pixelDisplay = document.querySelector('#pixel-display')
const resetBtn = document.querySelector('#reset')

const colorSelection = ['red', 'blue', 'green', 'black', 'white']
let colorCount = 0;

function makePixel() {
    const pixel = document.createElement("canvas")
    pixelDisplay.appendChild(pixel)
}

let pixelCount = 0;

while (pixelCount < 64) {
    makePixel()
    pixelCount++
}

pixelDisplay.addEventListener('click', e => {
    e.target.style.backgroundColor = colorSelection[colorCount]
    if (colorCount < 4) {
        colorCount++
    } else {
        colorCount = 0
    }
})

resetBtn.addEventListener('click', e => {
    pixelDisplay.childNodes.forEach(pixel => pixel.style.backgroundColor = "white")
})