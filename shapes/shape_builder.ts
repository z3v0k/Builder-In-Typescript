import { Color, Shape, ShapeType } from './';

export class ShapeBuilder {
  private shapeType: ShapeType;
  private shapeColor: Color;

  setShapeType(type: ShapeType) {
    console.log('set shape type');
    this.shapeType = type;
    return this;
  }

  setShapeColor(color: Color) {
    console.log('set shape color');
    this.shapeColor = color;
    return this;
  }

  build(): Shape {
    console.log('built shape');
    return new Shape(this.shapeType, this.shapeColor);
  }
}
