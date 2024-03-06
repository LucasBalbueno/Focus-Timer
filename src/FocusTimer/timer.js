import state from "./state.js"
import * as el from './elements.js'
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countDown() {

    clearTimeout(state.countDownId)

    if (!state.isRunning) {
        return;
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--

    }
    
    if (minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    // AQUI ESTAMOS FAZENDO UMA RECURSÃO EM JAVASCRIPT, QUANDO UMA FUNÇÃO CHAMA ELA MESMA.
    state.countDownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay (minutes, seconds) {
     //nullish coalesing operator
     //Esse operador serve como um observador, verificando se o valor de minutes ou seconds é null ou undefined e caso seja, ele retorna outro valor (depois de "??""")
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    // A função string transforma o número mostrado em string. Já a função padStar preenche automaticamente o 0 até tiver 2 digitos.
    el.minutes.textContent = String(minutes).padStart(2, '0');
    el.seconds.textContent = String(seconds).padStart(2, '0');
}