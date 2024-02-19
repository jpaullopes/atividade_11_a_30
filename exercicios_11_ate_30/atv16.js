//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
import { question } from "readline-sync"
//entrada
const lado_do_quadrado = Number(question('Digite o valor do lado do quadrado: '))
//processamento
const area_do_quadrado = lado_do_quadrado ** 2
//saída
console.log(`A área de um quadrado com lado ${lado_do_quadrado} é igual à ${area_do_quadrado.toFixed(2)}.`)