import ArmourDecorator from './ArmourDecorator';
import BaseEnemy from './BaseEnemy';
import HelmetDecorator from './HelmetDecorator';

let enemy = new BaseEnemy();
let enemyWithhelmet = new HelmetDecorator(enemy);
let enemyWithArmour = new ArmourDecorator(enemyWithhelmet);
let totalDamage = enemyWithArmour.takeDamage();

console.log(totalDamage);/*Return 3.333333*/