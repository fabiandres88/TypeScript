import { MongoClient } from 'mongodb';
import { SpartanRepository } from './repositories/SpartanRepository';
import { Spartan } from './entities/Spartan';
import { HeroRepository } from './repositories/HeroesRepository';
import {Hero } from './entities/Hero';

(async () => {
    //connecting at mongoclient
    const connection = await MongoClient.connect('mongodb://localhost',
        { useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
    const db = connection.db('Warriors');

    //creating a spartan
    const spartan = new Spartan('Leonidas', 1020);    

    //initializing the repository
    const repository = new SpartanRepository(db, 'spartans');
    

    //call create method from generic repository
    const result = await repository.create(spartan);
    console.log(`spartan inserted with ${result ? 'success' : 'fail'}`);

    //call specific method from spartan class
    const count = await repository.countOfSpartan();
    console.log(`the count of spartans is ${count}`);

    //create a hero
    const hero = new Hero('Superman', 200);
    const repositoryHero = new HeroRepository(db, 'heroes');
    const resultHero = await repositoryHero.create(hero);
    console.log(`hero inserted with ${result ? 'success' : 'fail'}`);
})();
