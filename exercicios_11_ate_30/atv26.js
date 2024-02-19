//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
console.log('Conversor de dias em semanas'.toUpperCase())
import { question } from "readline-sync"
//entrada
const dias_totais = Number.parseInt(question('Digite o tatal dos dias: '))
//processamento
const semanas = Number.parseInt(dias_totais / 7)
const resto_dos_dias = dias_totais % 7
//saída
console.log(`A conversão de ${dias_totais} dias resulta em ${semanas} semanas e ${resto_dos_dias} dias.`)