import { gerador_numero_aleatorio } from './numero_aleatorio.js';
import { verifica_tentativa } from './verifica_tentativa.js';

function startGame() {
    const max_tentativa = 5;
    const min = 1;
    const max = 50;
    const numero_gerado = gerador_numero_aleatorio(min, max);
    let tentativa = 0;
    let acertou = false;

    console.log(`Tente adivinhar o número entre ${min} e ${max}. Você tem ${max_tentativa} tentativas.`);

    while (tentativa < max_tentativa && !acertou) {
        const palpite = parseInt(prompt('Digite seu palpite:'));
        tentativa++;
        
        const result = verifica_tentativa(palpite, numero_gerado);
        console.log(result);

        if (palpite === numero_gerado) {
            acertou = true;
        } else {
            console.log(`Tentativa ${tentativa} de ${max_tentativa}`);
        }
    }

    if (!acertou) {
        console.log(`Você esgotou suas tentativas! O número correto era ${numero_gerado}.`);
    }
}

startGame();