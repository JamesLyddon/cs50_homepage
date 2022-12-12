const pixelDisplay = document.querySelector('#pixel-display')
const resetBtn = document.querySelector('#reset')

// const colorSelection = ['#1D1C1A', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff','#ffb3ba', '#FAF8F6']

const colorSelection = ['#1D1C1A', "#edc951", "#eb6841", "#cc2a36", "#4f372d", "#00a0b0", "#FAF8F6"]

// pixel canvas maker
function makePixel() {
    const pixel = document.createElement("canvas")
    pixel.attributes.currentColor = 0
    pixelDisplay.appendChild(pixel)
}

let pixelCount = 0;

// make canvas - fill pixelDisplay with canvases
while (pixelCount < 256) {
    makePixel()
    pixelCount++
}

// change pixel color
pixelDisplay.addEventListener('pointerdown', e => {
    e.preventDefault()
    e.target.style.backgroundColor = colorSelection[e.target.attributes.currentColor]
    if (e.target.attributes.currentColor < 6) {
        e.target.attributes.currentColor++
    } else {
        e.target.attributes.currentColor = 0
    }
})

// right click to delete individual pixel
pixelDisplay.addEventListener('contextmenu', e => {
    e.preventDefault()
    e.target.style.backgroundColor = '#FAF8F6'
    e.target.attributes.currentColor = 0
})

// reset entire canvas
resetBtn.addEventListener('click', e => {
    e.preventDefault()
    pixelDisplay.childNodes.forEach(pixel => {
        pixel.attributes.currentColor = 0
        pixel.style.backgroundColor = '#FAF8F6'
    })
})

// click and drag

let mouseDown = false

pixelDisplay.addEventListener('pointerdown', e => {
    e.preventDefault()
    pointerDown = true
})

pixelDisplay.addEventListener('pointerup', e => {
    e.preventDefault()
    pointerDown = false
})

let pixels = Array.from(pixelDisplay.children);

pixels.forEach(pixel => pixel.addEventListener('pointerenter', e => {
    e.preventDefault()
    if (pointerDown) {
        e.target.style.backgroundColor = colorSelection[e.target.attributes.currentColor]
        if (e.target.attributes.currentColor < 6) {
            e.target.attributes.currentColor++
        } else {
            e.target.attributes.currentColor = 0
        }
    }
}))