import EnemyDecorator from './EnemyDecorator';

export default class Helmetdecorator extends EnemyDecorator {
    takeDamage(): number {
        return this.enemy.takeDamage() / 2;
    }
}