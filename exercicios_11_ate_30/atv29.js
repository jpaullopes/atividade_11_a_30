//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import { question } from "readline-sync"
console.log('CONVERSOR DE MESES PARA ANOS')
//entrada
const total_de_meses = Number.parseInt(question('Digite o total de meses para a conversão: '))
//processamento
const anos = Number.parseInt(total_de_meses / 12)
const resto_dos_meses = total_de_meses % 12
//saída
console.log(`[A conversão totalizou:]
Anos: ${anos}
Meses: ${resto_dos_meses}`)