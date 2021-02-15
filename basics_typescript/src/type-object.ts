//Object

let user : object;
user = {}; //Object

user = {
    id: "npxjerthv94nfbsyjudjs",
    name: "Ramon Diaz",
    email: "ramon@example.com",
    subscribe: true,
    age: 56
};

console.log(user);

//Object v.s object (Class v.s type TS)

const myUser = {
    id: "npxjerthv94nfbsyjudjs",
    name: "Ramon Diaz",
    email: "ramon@example.com",
    subscribe: true,
    age: 56
};

console.log(myUser.email);

const isInstance = myUser instanceof Object;
console.log(isInstance);
