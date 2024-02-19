//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
import { question } from "readline-sync"
//entrada
const base_do_retangulo = Number(question('Digite o valor da base do retângulo: '))
const altura_do_retangulo = Number(question('Digite o valor da altura do retângulo: '))
//processamento
const area_do_retangulo = base_do_retangulo * altura_do_retangulo
//saída
console.log(`A área do retângulo é igual à ${area_do_retangulo.toFixed(2)}.`)