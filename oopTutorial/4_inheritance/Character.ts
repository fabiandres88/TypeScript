import { Util } from './Util';

export class Character {
    protected _name: string;
    protected _armour: number;
    protected _maxLife: number;
    protected _currentLife: number;

    constructor(name: string) {
        this._name= name;
        this._armour= Util.randomize(10);
        this._maxLife= Util.randomize(10);        
        this._currentLife= Util.randomize(10);
    }
}