//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
import { question } from "readline-sync"
//entrada
const numero = Number(question('Digite o número que você quer inverter[3 dígitos]: '))
//processamento
/*converter em uma string -> separar cada elemento e colocar em uma lista 
-> inverter as ordens dos elementos dessa lista ->
-> concatenar essa lista em uma string denovo -> tranformar em um número denovo */
var numero_invertido = numero.toString()
numero_invertido = numero_invertido.split('')
numero_invertido.reverse()
numero_invertido = numero_invertido.join('')
numero_invertido = Number(numero_invertido)
//saída
console.log(`O inverso do número ${numero} é o número ${numero_invertido}. `)