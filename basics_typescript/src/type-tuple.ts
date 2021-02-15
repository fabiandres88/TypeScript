export {};

//Tuple

//[1, 'user']
let user: [number, string];
user = [45, 'juancho'];

console.log('user: ', user);
console.log('userName: ', user[1]);
console.log('userName length: ', user[1].length);
console.log('id: ', user[0]);

//Tuples with several values
// id, userName, ispro

let otherTuple: [number, string, boolean];
otherTuple = [123, 'Patricio', true];

console.log('userInfo: ', otherTuple);

//Array of tuples

let arraytuples: [number, string, boolean] [] = [];
arraytuples.push([123, 'Patricio', true]);
arraytuples.push([124, 'Patricia', false]);
arraytuples.push([125, 'Patrick', true]);

console.log('users: ', arraytuples);

//Using functions

arraytuples[2][1] = arraytuples[2][1].concat(' updated');
console.log('users: ', arraytuples);