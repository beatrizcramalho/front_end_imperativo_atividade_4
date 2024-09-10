let min = 1;
let max = 50;

/**
 * 
 * @param {number} palpite 
 * @param {number} valor 
 * @returns {string}
 * Retorna uma string comunicando o andamento do jogo.
 */
export function verifica_tentativa(palpite, valor) {
    if (palpite > valor) {
        max = palpite - 1; // Atualiza o limite superior
        return `O número é menor. Tente um número entre ${min} e ${max}.`;
    } else if (palpite < valor) {
        min = palpite + 1; // Atualiza o limite inferior
        return `O número é maior. Tente um número entre ${min} e ${max}.`;
    } else {
        return 'Parabéns! Você adivinhou o número.';
    }
}