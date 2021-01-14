import Character from './Character';

let ironman: Character = new Character("Ironman", 150, 150, 50, 50);
//overwrite throw set method
ironman.name= "Captain America";
console.log(ironman);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Using trainAtack method...");
ironman.trainAtack();
console.log(ironman.status());

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Using trainDefense method...");
ironman.trainDefense();
console.log(ironman.status());

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Using rest method...");
ironman.rest();
console.log(ironman.status());

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Using fight method...");
ironman.fight();
console.log(ironman.status());
console.log("Damage received: ",ironman.fight());

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Using isDead method...");
console.log(ironman.isDead());