import EnemyDecorator from './EnemyDecorator';

export default class ArmourDecorator extends EnemyDecorator {
    takeDamage(): number {
        return this.enemy.takeDamage()/ 1.5;
    }
}