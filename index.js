let data = 'Lorem Ipsum';
let valid = true;
const numbers = [50, 10, 90, 45, 67, 100];

function myFunction() {
  console.log('Y O S E F');
}

function hola() {
  console.log('Hola');
}

function adios() {
  console.log('Adios');
}
const varWithFunction = myFunction;
// varWithFunction();

const systemStates = [];
systemStates.push(myFunction);
systemStates.push(hola);
systemStates.push(adios);

// console.log(systemStates);

// systemStates[0]();
// systemStates[1]();
// systemStates[2]();

// console.log(systemStates[1]);
// console.log(systemStates.hola);

// const myName = () => {
//   console.log('Y O S E F');
// };

// myName();

let pepe = {};

// console.log(typeof pepe);

let pepe2 = {
  name: 'Pepe',
  age: 26,
  boardGames: ['Azul', 'Winspang', 'Catan'],
  greeting: (personName) => `Hola, ${personName}`,
  state: {
    feeling: 'happy',
    mind: 'Good',
  },
  friends: [{}, {}, {}],
};

// console.log(pepe2['age']);
//console.log(pepe2.age);
// console.log(pepe2['greeting']('Yosef'));
//console.log(pepe2.greeting('Yosef'));

// console.log(pepe2['state']['feeling']);
console.log(pepe2.state);

// console.log(pepe2['greeting']('Yosef'));

// let myAge = pepe2['age'];

//console.log(myAge);

//console.log(pepe2['boardGames'][1]);

// let otherGame = 'Risk';

// pop, push
// pepe2['boardGames'].pop();
// console.log(pepe2['boardGames']);
// pepe2['boardGames'].push(otherGame);

// pepe2['boardGames'][2] = otherGame;
// console.log(pepe2['boardGames']);
