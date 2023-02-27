/* 
Luiz Otavio Mirando tem 30 anos, pesa 84 kg
tem 1.8 de aultura e seu IMC e de 25.925925925925924
Luiz Otavio nasceu em 1980
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;

let imc;
let anoNascimento;

imc = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2023 - idade;

// template strings

console.log(`Seu nome é ${nome} ${sobrenome}`);
console.log(`Seu IMC é de ${imc.toFixed(2)}`);
console.log(`Seu ano de nascimento é de ${anoNascimento}`);