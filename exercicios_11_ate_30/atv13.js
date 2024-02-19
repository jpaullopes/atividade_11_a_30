//Leia um valor em real (R$), calcule e escreva 70% deste valor.
import { question } from "readline-sync"
//entrada
const valor_em_real = Number(question('Digite o valor em real[R$]: '))
//processamento
const valor_descontado = valor_em_real * 0.70 
//saída
console.log(`70% de ${valor_em_real.toFixed(2)} R$ equivale à ${valor_descontado.toFixed(2)} R$.`)