//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
import { question } from "readline-sync"
//entrada
const numero = Number(question('Digite o número que você quer inverter[3 dígitos]: '))
//processamento
const centena = Number.parseInt(numero / 100)
const resto = numero % 100
const dezena = Number.parseInt(resto / 10)
const unidade = resto % 10
const numero_invertido = unidade * 100 + dezena * 10 + centena
//saída
console.log(`O inverso do número ${numero} é o número ${numero_invertido}. `)
