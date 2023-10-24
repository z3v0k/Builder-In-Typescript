import { Roof } from './roof';

export class ConcreteRoof implements Roof {
  build(): void {
    console.log('building concrete roof...');
  }
}
