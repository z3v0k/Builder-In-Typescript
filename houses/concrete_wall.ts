import { Wall } from './wall';

export class ConcreteWall implements Wall {
  build(): void {
    console.log('building croncrete wall...');
  }
}
