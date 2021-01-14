export class Character {
    
    constructor(
        public name: string,
        public energy: number,
        public life: number,
        public atack: number,
        public defense: number){}   
}

let ironman: Character = new Character("Ironman", 50, 50, 50, 50);
//override
ironman.atack= 90;
console.log(ironman);

