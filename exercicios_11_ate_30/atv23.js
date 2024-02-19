//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import { question } from "readline-sync"
console.log('CONVERSOR DE PESO Kg => g')
//entrada
const valor_em_kg = Number(question('Digite o valor em quilogramas[Kg]: '))
//processamento
const valor_em_gramas = valor_em_kg * 1000
//saída
console.log(`${valor_em_kg} Kg convertidos para gramas é igual a: ${valor_em_gramas} g. `)