import { Roof } from './roof';
import { Wall } from './wall';

export abstract class HousePartsFactory {
  abstract createWall(): Wall;
  abstract createRoof(): Roof;
}
