import { Util } from './Util';
import { Character } from './Character';

export class Warrior extends Character {
    private _power: number;
    private _agility: number;
    constructor(name: string) {
        super(name);
        this._power = Util.randomize(100);
        this._agility = Util.randomize(100);
    }
}