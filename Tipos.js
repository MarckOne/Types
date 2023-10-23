// Tipos Primitivos 

// Tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero; 

console.log(operacaoMatematica)

// Tipo Flutuante

const numeroFlutuante = 3.3;
const numeroFlutuanteSemZero = .5;

const operacaoFlutuante = primeiroNumero / numeroFlutuanteSemZero;

console.log(operacaoFlutuante);

// NaN -> Not a Number

const alura = 'Alura';
console.log(alura / numeroFlutuante);

// Tipo String (Texto)\

console.log('------------------------------');

const texto1 = "Ola, mundo!!";
const texto2 = 'ola, mundo11';
const senha = 'senhasupersegura123!';
const stringDeNumeros = '123456789';
const citacao = 'Meu nome é: ';

console.log(citacao);

const nome1 = 'Marcos';

// Template String ou Template Literal

const palavra1 = 'Oi!';
const frase1 = `O marcos disse "${palavra1}"`;

console.log(frase1);

// Concatenacao (+)

console.log(citacao + nome1);

// Caracteres especiais

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Tipo Boolean (True or False)

// True --> Verdadeiro
// False --> Falso

const primeiroValor = 1;
const segundoValor = 2;
const terceiroValor = 1;

console.log(primeiroValor === segundoValor);
console.log(primeiroValor === terceiroValor);