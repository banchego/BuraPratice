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
 
 const { permissions:{role : 'user'} = {} } = person; 
console.log(role);