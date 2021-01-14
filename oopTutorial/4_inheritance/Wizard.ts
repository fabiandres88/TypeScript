import { Util } from './Util';
import { Character } from './Character';

export class Wizard extends Character {
    private _smart: number;
    private _velocility: number;
    constructor(name: string) {
        super(name);//allways call in the first line of constructor
        this._smart = Util.randomize(1_000);
        this._velocility = Util.randomize(100);
    }
}