const pixelDisplay = document.querySelector('#pixel-display')
const resetBtn = document.querySelector('#reset')

const colorSelection = ['#1D1C1A', "#edc951", "#eb6841", "#cc2a36", "#4f372d", "#00a0b0", "#FAF8F6"]

// disable touch functionality
const wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('touchstart', e => {
    e.preventDefault()
}) 

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

// disable touch operations
pixelDisplay.addEventListener('touchstart', e => {
    e.preventDefault()
    console.log('pixel display')
})

// change pixel color
pixelDisplay.addEventListener('pointerdown', e => {
    e.target.style.backgroundColor = colorSelection[e.target.attributes.currentColor]
    if (e.target.attributes.currentColor < 6) {
        e.target.attributes.currentColor++
    } else {
        e.target.attributes.currentColor = 0
    }
})

// right click to delete individual pixel
pixelDisplay.addEventListener('contextmenu', e => {
    e.target.style.backgroundColor = '#FAF8F6'
    e.target.attributes.currentColor = 0
})

// reset entire canvas
resetBtn.addEventListener('click', e => {
    pixelDisplay.childNodes.forEach(pixel => {
        pixel.attributes.currentColor = 0
        pixel.style.backgroundColor = '#FAF8F6'
    })
})

// click and drag

// let pointerDown = false

// pixelDisplay.addEventListener('pointerdown', e => {
//     pointerDown = true
//     console.log(pointerDown)
// })

// pixelDisplay.addEventListener('pointerup', e => {
//     pointerDown = false
//     console.log(pointerDown)
// })

// let pixels = Array.from(pixelDisplay.children);

// pixels.forEach(pixel => pixel.addEventListener('pointerenter', e => {
//     if (pointerDown) {
//         e.target.style.backgroundColor = colorSelection[e.target.attributes.currentColor]
//         if (e.target.attributes.currentColor < 6) {
//             e.target.attributes.currentColor++
//         } else {
//             e.target.attributes.currentColor = 0
//         }
//     }
// }))