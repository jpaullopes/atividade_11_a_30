//Leia um valor em km, calcule e escreva o equivalente em m.
import { question } from "readline-sync"
console.log('CONVERSOR DE QUILOMETRAGEM KM => M')
//entrada
const valor_em_km = Number(question('Informe o valor que você quer converter[Km]: '))
//processamento
const valor_em_metros = valor_em_km * 1000
//saída
console.log(`${valor_em_km} Km convertidos para metros é igual à ${valor_em_metros} m .`)