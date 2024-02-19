//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import { question } from "readline-sync"
//entrada
const salario_do_trabalhador = Number(question('Digite o seu salário[R$]: '))
//processamento
const novo_salario = salario_do_trabalhador * 1.25
//saída
console.log(`Com um reajuste de 25% o seu salário sairá de ${salario_do_trabalhador.toFixed(2)} R$ para ${novo_salario.toFixed(2)} R$.`)