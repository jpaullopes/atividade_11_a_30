//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
import { question } from "readline-sync"
//entrada
const nota1 = Number(question('Digite a primera nota: '))
const peso1 = Number(question('Digite o peso da primera nota: '))
const nota2 = Number(question('Digite a segunda nota: '))
const peso2 = Number(question('Digite o peso da segunda nota: '))
const nota3 = Number(question('Digite a terceira nota: '))
const peso3 = Number(question('Digite o peso da terceira nota: '))
//processamento
const soma_notas = nota1 * peso1 + nota2 * peso2 + nota3 * peso3
const soma_pesos = peso1 + peso2 + peso3
const media_ponderada = soma_notas / soma_pesos
//saída
console.log(`A media ponderada das notas é: ${media_ponderada.toFixed(2)} pontos.`)