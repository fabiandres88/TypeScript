//Data Types of Typescript

// Number
//Explicit

let phone: number;
phone = 1;

//inflicted

let phone2 = 123456;

//Using hexadecimal values
let hex : number= 0xf00d;

//Using binary values
let binary: number = 0b1010;

//Using octal values
let octal : number = 0o744;

//Boolean
let isPro : boolean;
isPro = true;

//inflicted
let isUserPro = false;

//String

let userName : string = 'fabiancho';
userName = "fabiancho2";

//Template String
//Using back-tick `

let userInfo : string;
userInfo = `
    User info:
    username: ${userName}
    firstName: ${userName + ' Ramirez'}
    phone: ${isPro}
`;

console.log('User Info: ', userInfo);


