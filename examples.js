'use strict';
//Rest parameter Один и последний

max(1,3);
max(1, 3, 3, 4, 5);


function max(a, b, ...numbers){
console.log(numbers);

}
/* Destructuring - деструктуризация - позволяет достать значение,
 с какой либо структуры данных. */

 const person = {
    name: {
        first: 'Nick',
        last : 'Bitkov'
    },
    // firstName: 'Peter',
    // lastName: 'Smith',
    age: 27
    
 };
 
 // const firstName = person.firstName;
 
//  const {firstName, lastName} = person;

//  const { name: {first: firstName, last: lastName}} = person; // saved in const firstName ( name: firstName)
//  console.log(firstName, lastName);

function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'
}) {
    console.log('user', user, 'port', port, 'host', host);

}
connect({port: 1111});

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
}
const { duck, ...otherAnimals} = dict;
console.log(otherAnimals);
/* const {name, age} = person;
--упрощает получение свойств из объектов --
--поддерживается вложенность и значения по умолчанию--
--работает с параметром функций--
--поддерживает rest element-- */
//!!!!!!!!!!!!Array Destructuring

const line = [
    [10, 17],
    [14,7]
];

const [[fistValue] , [secondValue] ] = line;
console.log(fistValue, secondValue );

const dictArr= {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};
const res = Object.entries(dictArr) //Создает двухмерный массив с ключами
.filter((arr)=>arr[1]=== 'squeak' )
.map(([key])=> key); //.filter((key, value)=>value=== 'squeak' );
console.log(res);
//Combine destructuring for arrays and objects

const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17,15]
    }
};
const { coordinates:{start:[startx, starty]}} = shape;
console.log(startx,starty);
//Template strings 


const user = 'Bob';
const num = 17;
// const txt = 'Hello, ' + user + ' you have '+ num + ' letters in your inbox';

const txt = `Hello ${user} you have ${num} letters in your inbox`;
console.log(txt);