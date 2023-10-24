import { ConcreteRoof } from './concrete_roof';
import { ConcreteWall } from './concrete_wall';
import { HousePartsFactory } from './house_parts_factory';
import { Roof } from './roof';
import { Wall } from './wall';

export class ConcreteHouseFactory extends HousePartsFactory {
  createWall(): Wall {
    return new ConcreteWall();
  }
  
  createRoof(): Roof {
    return new ConcreteRoof();
  }
}
