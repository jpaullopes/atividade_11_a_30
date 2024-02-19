//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
import { question } from "readline-sync"
//entrada
const altura_triangulo = Number(question('Digite o valor da altura do triângulo: '))
const base_triangulo = Number(question('Digite o valor da base do triângulo: '))
//processamento
const area_triangulo = (base_triangulo * altura_triangulo) / 2
//saída
console.log(`A area do triângulo é igual a: ${area_triangulo.toFixed(2)}.`)