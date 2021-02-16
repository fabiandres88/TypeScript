export { }
//Asserts
//<tine> Angle bracket Syntax
let username: any;
username = 'Sofia';
username = 'Sofia';

// We have a chain, TS believe in me

let message: string = (<string>username).length > 5 ?
    `Welcome ${username}` :
    'username is too short';
console.log('message', message);

let usernameWithid: any = 'Sofia 1';
//How to get username? 
username = (<string>usernameWithid).substring(0, 5);
console.log('Username only: ', username);

//sintaxis as 
message: (username as string).length > 5 ?
    `Welcome  ${username}` :
    'username is too short';
let hellouser: any;
hellouser = 'hello paparazzi';
username = (hellouser as string).substring(6);
console.log('username ', username);
