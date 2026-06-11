// Captura os botões
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnContrast = document.getElementById('btn-contrast');

// Controle de tamanho da fonte
let currentFontSize = 100; // Porcentagem

btnIncrease.addEventListener('click', () => {
    if (currentFontSize < 150) { // Limite máximo
        currentFontSize += 10;
        document.body.style.fontSize = currentFontSize + '%';
    }
});

btnDecrease.addEventListener('click', () => {
    if (currentFontSize > 80) { // Limite mínimo
        currentFontSize -= 10;
        document.body.style.fontSize = currentFontSize + '%';
    }
});

// Controle do modo de contraste (tema escuro/acessibilidade)
btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('contrast-mode');
});
