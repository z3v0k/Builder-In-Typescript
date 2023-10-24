import { Color, ShapeBuilder, ShapeColor, ShapeType } from './shapes';
import {
  ConcreteHouseFactory,
  WoodenHouseFactory,
  HouseBuilder,
} from './houses';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Builder</h1>`;

const redColor = new Color(ShapeColor.Red);
const shapeBuilder = new ShapeBuilder();
const shape = shapeBuilder
  .setShapeType(ShapeType.Rectangle)
  .setShapeColor(redColor)
  .build();

console.log('')

const concreteHouseFactory = new ConcreteHouseFactory();
const concreteHouseBuilder = new HouseBuilder(concreteHouseFactory);
concreteHouseBuilder.build();

console.log('')

const woodenHouseFactory = new WoodenHouseFactory();
const woodenHouseBuilder = new HouseBuilder(woodenHouseFactory);
woodenHouseBuilder.build()
