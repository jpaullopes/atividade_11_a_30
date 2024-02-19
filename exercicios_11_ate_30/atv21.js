//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
import { question } from "readline-sync"
console.log('CONVERSOR DE TEMPERATURA °F => °C')
//entrada
const temperatura_fahrenheit = Number(question('Digite a temperatura que você quer converter[°F]: '))
//processamento
const temperatura_celsius = (5 * temperatura_fahrenheit - 160) / 9 
//saída
console.log(`A temperatura de ${temperatura_fahrenheit} °F convertido para celcius é igual à ${temperatura_celsius.toFixed(2)} °C.`)