export {};
//10, '10'

let idUser: number | string;
idUser = 10;
idUser = '10';

function getUserById (id:number | string) {
    //Bussiness logig
    return 'Fabiancho';
};

getUserById(20);
getUserById('20');

//Aliases of types: TS
type IdUser = number | string; //It could be used as a type of idUser variable ans as a parameter of getUserById Function
type UserName = string; //It coulb be assing of the returning typeo of function

//Literal types

type SquareSize = '100x100' | '500x500' | '1000x1000';
let smaallPicture = '100x100';
//let smaallPicture = '200x200'; Error
let mediumPicture = '500x500';
 