// A APLICAÇÃO COMEÇA NO DARKMODE
let darkMode = true

const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    // ALTERNANDO O MODO LIGHT NO DOCUMENT, PARA ADICIONAR E REMOVER A CLASSE LIGHT
    document.documentElement.classList.toggle('light');

    // COMO A APLICAÇÃO COMEÇA NO DARKMODE, O TEXTO DE ACESSIBILIDADE CONTIDO EM spam DEVE MOSTRAR O MODO CONTRÁRIO
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado!`

    // NO FINAL DO EVENTO, APENAS NEGAMOS A VARIAVEL darkMode PARA A PRÓXIMA EXECUÇÃO.
    darkMode = !darkMode
})