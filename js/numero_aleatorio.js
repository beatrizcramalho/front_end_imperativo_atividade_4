/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 * Retorna um número aleatório entre o valor mínimo e máximo informado pelo usuário.
 */

export function gerador_numero_aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}