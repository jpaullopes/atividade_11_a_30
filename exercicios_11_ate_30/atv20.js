//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
import { question } from "readline-sync"
console.log('CONVERSOR DE TEMPERATURA °C => °F')
//entrada
const temperatura_celsius = Number(question('Digite a temperatura que você quer converter[°C]: '))
//processamento
const temperatura_fahrenheit = (9 * temperatura_celsius + 160) / 5 
//saída
console.log(`A temperatura de ${temperatura_celsius} °C convertido para fahrenheit é igual à ${temperatura_fahrenheit.toFixed(1)} °F.`)
