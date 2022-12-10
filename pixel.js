const pixelDisplay = document.querySelector('#pixel-display')
const resetBtn = document.querySelector('#reset')

const colorSelection = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff','#1D1C1A', '#FAF8F6']
let currentColor = 0;

function makePixel() {
    const pixel = document.createElement("canvas")
    pixel.attributes.currentColor = 0
    pixelDisplay.appendChild(pixel)
}

let pixelCount = 0;

while (pixelCount < 64) {
    makePixel()
    pixelCount++
}

pixelDisplay.addEventListener('click', e => {
    e.target.style.backgroundColor = colorSelection[e.target.attributes.currentColor]
    if (e.target.attributes.currentColor < 6) {
        e.target.attributes.currentColor++
    } else {
        e.target.attributes.currentColor = 0
    }
})

resetBtn.addEventListener('click', e => {
    pixelDisplay.childNodes.forEach(pixel => {
        pixel.attributes.currentColor = 0
        pixel.style.backgroundColor = '#FAF8F6'
    })
})
