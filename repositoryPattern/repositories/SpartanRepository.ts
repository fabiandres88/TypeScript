import { BaseRepository } from './base/BaseRepository';
import { Spartan } from '../entities/Spartan';

export class SpartanRepository extends BaseRepository<Spartan>{
    countOfSpartan(): Promise<number> {
        return this._collection.countDocuments({});
    }
}