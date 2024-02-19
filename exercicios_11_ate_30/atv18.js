//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
import { question } from "readline-sync"
//entrada
const raio_do_circulo = Number(question('Digite o valor do raio que você quer: '))
const valor_pi = Number(question('Digite o valor do pi[π]: '))
//processamento
const comprimento = 2 * valor_pi * raio_do_circulo
//saída
console.log(`O valor do comprimento de um circulo com raio de ${raio_do_circulo} é de ${comprimento.toFixed(2)}`)