/*Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde. */
import { question } from "readline-sync"
console.log('CONVERSOR DE MINUTOS EM DIAS E HORAS')
//entrada
const total_de_minutos = Number.parseInt(question('Digite o total de minutos para a conversão: '))
//processamento
const dias_totais = Number.parseInt((total_de_minutos / 60) / 24)
const horas_totais = Number.parseInt((total_de_minutos / 60) % 24)
const resto_dos_minutos = total_de_minutos % 60
//saída
console.log(`A conversão resulta em:
Dias: ${dias_totais}
Horas: ${horas_totais}
Minutos: ${resto_dos_minutos}`)