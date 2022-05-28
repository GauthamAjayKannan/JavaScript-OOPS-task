class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(r) {
    this.radius = r;
  }

  getColor() {
    return this.color;
  }

  setColor(c) {
    this.color = c;
  }

  toString() {
    return `The circle's radius is ${this.radius} and the color is ${this.color}`;
  }

  getArea() {
    return 3.14 * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * 3.14 * this.radius;
  }
}

a = new Circle(2, "blue");
console.log(a);
console.log(a.getRadius());
console.log(a.getArea());
console.log(a.toString());
console.log(a.getCircumference());
