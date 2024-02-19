/**Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14) */
import { question } from "readline-sync"
//entrada
const raio_da_esfera = Number(question('Digite o valor do raio da esfera[cm]: '))
const valor_do_pi = Number(question('Digite o valor correspondente ao PI[π]: '))
//processamento
const volume_da_esfera = (4 * valor_do_pi * raio_da_esfera ** 3) / 3
//saída
console.log(`O valor do volume de uma esfera com raio: ${raio_da_esfera} cm e PI: ${valor_do_pi} é igual à ${volume_da_esfera.toFixed(2)} cm³.`)