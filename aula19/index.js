// tipos de dados primitivos
// string, number, boolean, undefined, null, symbol

// tipos primitivos
const nome = 'Luiz'; // string
const idade = 25; // number
const sexo = true; // boolean
const peso = 80.5; // number
const altura = 1.80; // number
const imc = peso / (altura * altura); // number
const nomeCompleto = nome +'' + idade +'' + sexo; // string
console.log(nomeCompleto); // string
console.log(typeof nomeCompleto); // string
console.log(typeof imc); // number
console.log(typeof peso); // number
console.log(typeof altura); // number
console.log(typeof idade); // number

// obs.: undefined nao aponta pra local nenhuma na memoria e null nao aponta pra local nenhuma na memoria