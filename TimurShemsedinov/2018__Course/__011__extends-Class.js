"use strict";

const Point = class {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }
}


const serializable = (Category) => class extends Category {
  toString() {
    return `[${this.x}, ${this.y}]`
  }
}

const movable = Category => class extends Category {
  move({ x, y }) {
    this.x += x;
    this.y += y;
  }
}


const PointEx = serializable(movable(Point));

const point1 = new PointEx({ x: 10, y: 20 });
point1.move({ x: 5, y: -2 });

console.log(point1.toString());

const { x, y } = point1;
console.log(x, y);


