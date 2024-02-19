/*Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.*/
import { question } from "readline-sync"
//entrada
const total_de_horas = Number.parseInt(question('Digite o total de horas para serem convertidas: '))
//processamento
const total_de_semanas = Number.parseInt((total_de_horas / 24) / 7) 
const total_de_dias = Number.parseInt((total_de_horas / 24) % 7)
const resto_das_horas = total_de_horas % 24
//saída
console.log(`[A conversão totaliza:]
${total_de_semanas} semanas 
${total_de_dias} dias 
${resto_das_horas} horas `)