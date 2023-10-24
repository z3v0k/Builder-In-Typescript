import { HousePartsFactory } from './house_parts_factory';
import { Roof } from './roof';
import { Wall } from './wall';

export class HouseBuilder {
  private wall: Wall;
  private roof: Roof;

  constructor(factory: HousePartsFactory) {
    this.wall = factory.createWall();
    this.roof = factory.createRoof();
  }

  build(): void {
    this.wall.build();
    this.roof.build();
    console.log('built house');
  }
}
