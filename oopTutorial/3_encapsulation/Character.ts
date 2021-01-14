export default class Character {
    constructor(
        private _name: string,
        private _energy: number,
        private _life: number,
        private _atack: number,
        private _defense: number) { }

    //to read data of a class use parameter
    //to print data of a class use return

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name= name;
    }

    //method whitout return
    public status(): string {
        
        return (">>Warrior<< \n"+
        "\n Name: "+ this.name+
        ("\n Energy: " + this._energy.toFixed(1)) +
        "\n Life: " + this._life +
        ("\n Atack: " + this._atack.toFixed(1)) +
        ("\n Defense: " + this._defense.toFixed(1))); 
    }

    public trainAtack(): void {
        this._atack += this.randomize(7);
        this._energy += this.randomize(10);
        this.isDead();
            if (this._defense > 100) {
                this._defense = 0;
            }        
    }

    public trainDefense(): void {
        this._defense += this.randomize(7);
        this._energy += this.randomize(10);
        this.isDead();
        if (this._defense > 100) {
            this._defense = 0;
        }
    }

    public rest(): void {
        this._energy += this.randomize(10);
        if (this._energy > 100) {
            this._energy = 100;
        }
    }

    public fight(): number {
        let damage: number = this.randomize(100);
        this._energy -= damage;
        this.isDead();
        return damage;//as a local variable not use this keyword
    }

    //method with return
    public isDead(): boolean {
        if (this._energy < 0) {            
            return true;
        }else {
            return false;
        }
    }

    private randomize(factor: number): number {
        return Math.random() * factor;
    }
}