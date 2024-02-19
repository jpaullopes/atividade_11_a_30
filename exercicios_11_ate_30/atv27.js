/*Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/
import { question } from "readline-sync"
console.log('CONVERSOR DE SEGUNDOS PARA HORAS E MINUTOS')
//entrada
const segundos_totais = Number.parseInt(question('Digite o total de sugundos para a conversão: '))
//processamento
const horas = Number.parseInt(segundos_totais / 3600)
const resto_das_horas = segundos_totais % 3600
const minutos = Number.parseInt(resto_das_horas / 60)
const resto_dos_segundos = resto_das_horas % 60
//saída
console.log(`A conversão é igual à:
[ ${horas}h ${minutos}m ${resto_dos_segundos}s ]`)