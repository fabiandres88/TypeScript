export default class Character {
    constructor(
        public name: string,
        public energy: number,
        public life: number,
        public atack: number,
        public defense: number) { }

    //to read data of a class use parameter
    //to print data of a class use return

    //method whitout return
    status(): string {
        // console.log(">>Warrior<<");
        // console.log("Name: ", this.name);
        // console.log("Energy: ", this.energy.toFixed(1));
        // console.log("Life: ", this.life);
        // console.log("Atack: ", this.atack.toFixed(1));
        // console.log("Defense: ", this.defense.toFixed(1));

        //from ^ that to this =>

        return (">>Warrior<< \n"+
        "\n Name: "+ this.name+
        ("\n Energy: " + this.energy.toFixed(1)) +
        "\n Life: " + this.life +
        ("\n Atack: " + this.atack.toFixed(1)) +
        ("\n Defense: " + this.defense.toFixed(1))); 
    }

    trainAtack(): void {
        this.atack += Math.random() * 7;
        this.energy += Math.random() * 10;
        this.isDead();
            if (this.defense > 100) {
                this.defense = 0;
            }        
    }

    trainDefense(): void {
        this.defense += Math.random() * 7;
        this.energy += Math.random() * 10;
        this.isDead();
        if (this.defense > 100) {
            this.defense = 0;
        }
    }

    rest(): void {
        this.energy += Math.random() * 10;
        if (this.energy > 100) {
            this.energy = 100;
        }
    }

    fight(): number {
        let damage: number = Math.random()*100;
        this.energy -= damage;
        this.isDead();
        return damage;//as a local variable not use this keyword
    }

    //method with return
    isDead(): boolean {
        if (this.energy < 0) {            
            return true;
        }else {
            return false;
        }
    }
}