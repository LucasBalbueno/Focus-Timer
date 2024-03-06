import state from  './state.js';
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countDown()
}

export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set () {
    // ESSE ATRIBUTO FAZ COM QUE O ELEMENTO HTML TENHA UM CAMPO EDITAVEL, PODENDO MUDAR PARA QUALQUER VALOR
    el.minutes.setAttribute('contenteditable', true)
    // QUANDO CLICARMOS NO BOTÃO DE SET O ELEMENTO PARA ALTERAR SERÁ FOCADO.
    el.minutes.focus()
}


export function toggleMusic () {
    state.isMute = document.documentElement.classList.toggle('music-on')
}