const emoji = document.querySelector('#emoji')

const happyBtn = document.querySelector('#happy')
const sadBtn = document.querySelector('#sad')
const neutralBtn = document.querySelector('#neutral')
const angryBtn = document.querySelector('#angry')
const sillyBtn = document.querySelector('#silly')

function changeFace(face) {
    emoji.classList.remove('bop')
    emoji.classList.add('bop')
    setTimeout(() => {
        emoji.classList.remove('bop')
        emoji.innerHTML = face
    }, 500)
}

neutralBtn.addEventListener('click', () => {
    changeFace('😐')
})

happyBtn.addEventListener('click', () => {
    changeFace('😃')
})

sadBtn.addEventListener('click', () => {
    changeFace('😢')
})

angryBtn.addEventListener('click', () => {
    changeFace('😡')
})

sillyBtn.addEventListener('click', () => {
    changeFace('🤣')
})