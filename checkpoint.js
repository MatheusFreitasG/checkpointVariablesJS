// Exercicio 1

var favoriteFood = 'pizza';

// Exercicio 2

var numOfSlices = 8;

// Exercicio 3

console.log(favoriteFood);

// Exercicio 4

console.log(numOfSlices);

// Exercicio 5

// Usando var
function exemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Será acessível aqui e imprimirá 10
};

// Usando let
function exemploLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // Irá gerar um erro, pois a variável y não está acessível aqui
};

// let só pode ser acessado dentro do bloco onde é chamado, var pode ser usado fora e dentro do seu bloco

//Exercicio 6

let changeMe = true
console.log(changeMe);

// Exercicio 7 e 8

console.log(!changeMe);

// Exercicio 9

const entree = 'Enchiladas';

// Exercicio 10

console.log(entree);

// Exercicio 11

// entree = 'pasta'

// Exercicio 12

let levelUp = 5
console.log(levelUp += 5);

// Exercicio 13

let powerLevel = 200
console.log(powerLevel -= 100);

// Exercicio 14

let multplyMe = 15
console.log(multplyMe *= 11);

// Exercicio 15

let quarterMe = 100
console.log(quarterMe /= 4);

// Exercicio 16

let gainedDollar = 1
gainedDollar++;
console.log(gainedDollar)

// Exercicio 17

let lostDollar = 1
lostDollar--
console.log(lostDollar)

// Exercicio 18

let name = 'Freitas'
let city = 'Osasco'
console.log(`My name is ${name}. My favorite ${city} is CITY`)

// Exercicio 19

let newVariable = 'Freitinhas lindo'
console.log(typeof(newVariable))

