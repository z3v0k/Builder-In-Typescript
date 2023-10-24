import { Wall } from './wall';

export class WoodenWall implements Wall {
  build(): void {
    console.log('building wooden wall...');
  }
}
