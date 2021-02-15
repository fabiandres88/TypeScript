//Explicit

//Null

let nullVariable: null;
nullVariable = null;

let otherVariable =null;
otherVariable = "chnaged";

console.log('nullVariable: ', nullVariable);
console.log('otherVariable: ', otherVariable);

//undefined

let undefinedVariable: undefined = undefined;
//Not could be changed

let otherUndefined = undefined;
otherUndefined = 2021;

console.log('undefinedVariable: ', undefinedVariable);
console.log('otherUndefined: ', otherUndefined);

//Both of them could be used as types and values

//Null and undefined as subtypes

let albumName: string;
albumName = null;
albumName = undefined;
