class Uber {
  constructor(model, distanceCovered, color) {
    this.model = model;
    this.distanceCovered = distanceCovered;
    this.color = color;
    this.price = 1;
  }

  priceBasedOnModel() {
    switch (this.model) {
      case "Toyota": {
        this.price *= 1000;
        break;
      }
      case "Audi X": {
        this.price *= 2000;
        break;
      }
      case "Indica": {
        this.price *= 500;
        break;
      }
      default: {
        this.price *= 100;
      }
    }
  }

  priceBasedOnColor() {
    switch (this.color) {
      case "Blue": {
        this.price += 100;
        break;
      }
      case "Gold": {
        this.price += 500;
        break;
      }
      case "Silver": {
        this.price += 400;
        break;
      }
      default: {
        this.price += 10;
      }
    }
  }

  priceBasedOnDistanceCovered() {
    this.price *= this.distanceCovered;
  }

  getPrice() {
    this.priceBasedOnModel();
    this.priceBasedOnDistanceCovered();
    this.priceBasedOnColor();
    return `The price for the model ${this.model} and for the distance covered ${this.distanceCovered} is ${this.price}`;
  }
}

let a = new Uber("Toyota", 20, "Blue");
let b = new Uber("Alto", 50, "Green");

console.log(a.getPrice());
console.log(b.getPrice());
