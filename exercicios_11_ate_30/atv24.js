//Leia um valor em m, calcule e escreva o equivalente em cm.
import { question } from "readline-sync"
console.log('CONVERSOR DE QUILOMETRAGEM M => cm')
//entrada
const valor_em_metros = Number(question('Digite o valor em metros[M]: '))
//processamento
const valor_em_centimetros = valor_em_metros * 100
//saída
console.log(`A conversão de ${valor_em_metros} m em centimetros é igual à ${valor_em_centimetros} cm.`)