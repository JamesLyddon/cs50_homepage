const emoji = document.querySelector('#emoji')
const happyBtn = document.querySelector('#happy')
const sadBtn = document.querySelector('#sad')
const neutralBtn = document.querySelector('#neutral')
const angryBtn = document.querySelector('#angry')
const sillyBtn = document.querySelector('#silly')

// disable touch functionality
const wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('touchstart', e => {
    e.preventDefault()
}) 


function changeFace(face) {
    emoji.classList.remove('bop')
    emoji.classList.add('bop')
    setTimeout(() => {
        emoji.classList.remove('bop')
        emoji.innerHTML = face
    }, 500)
}

neutralBtn.addEventListener('pointerdown', () => {
    changeFace('😐')
})

happyBtn.addEventListener('pointerdown', () => {
    changeFace('😃')
})

sadBtn.addEventListener('pointerdown', () => {
    changeFace('😢')
})

angryBtn.addEventListener('pointerdown', () => {
    changeFace('😡')
})

sillyBtn.addEventListener('pointerdown', () => {
    changeFace('🤣')
})