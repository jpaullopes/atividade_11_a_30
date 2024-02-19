//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import { question } from "readline-sync"
//entrada
const valor_metros = Number.parseInt(question('Digite o valor em metros a serem convertidos:[M] '))
//processamento
const valor_quilometros= Number.parseInt(valor_metros / 1000)
const resto_dos_metros = valor_metros % 1000
//saída
console.log(`O resultado da conversão é de: ${valor_quilometros}Km e ${resto_dos_metros}m.`)