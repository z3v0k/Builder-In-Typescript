import { Roof } from './roof';

export class WoodenRoof implements Roof {
  build(): void {
    console.log('building wooden roof...');
  }
}
