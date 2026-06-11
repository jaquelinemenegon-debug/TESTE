// Capturando elementos de ajuste
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnContrast = document.getElementById('btn-contrast');

// Controle do tamanho da fonte padrão base (em %)
let currentSizePercent = 100;

btnIncrease.addEventListener('click', () => {
    if (currentSizePercent < 140) { // Limite superior para evitar quebrar o layout
        currentSizePercent += 10;
        document.documentElement.style.setProperty('--base-font-size', currentSizePercent + '%');
    }
});

btnDecrease.addEventListener('click', () => {
    if (currentSizePercent > 85) { // Limite inferior
        currentSizePercent -= 10;
        document.documentElement.style.setProperty('--base-font-size', currentSizePercent + '%');
    }
});

// Alternância do tema de contraste / cor
btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('contrast-mode');
});
