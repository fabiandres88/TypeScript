import ArmourDecorator from './ArmourDecorator';
import BaseEnemy from './BaseEnemy';
import Helmetdecorator from './HelmetDecorator';

let enemy = new BaseEnemy();
let enemyWithhelmet = new Helmetdecorator(enemy);
let enemyWithArmour = new ArmourDecorator(enemyWithhelmet);
let totalDamage = enemyWithArmour.takeDamage();

console.log(totalDamage);/*Return 3.333333*/