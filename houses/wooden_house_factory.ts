import { HousePartsFactory } from './house_parts_factory';
import { Roof } from './roof';
import { WoodenRoof } from './wooden_roof';
import { WoodenWall } from './wooden_wall';
import { Wall } from './wall';

export class WoodenHouseFactory extends HousePartsFactory {
  createWall(): Wall {
    return new WoodenWall();
  }

  createRoof(): Roof {
    return new WoodenRoof();
  }
}
