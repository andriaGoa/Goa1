class Transport {
  constructor(maxSpeed, color, fuel) {
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.fuel = fuel;
    this.distanceTraveled = 0;
  }

  refuel(liters) {
    if (typeof liters !== "number" || liters < 0) {
      console.error("Fuel amount must be a non-negative number.");
      return;
    }
    this.fuel += liters;
  }

  changeColor(newColor) {
    if (typeof newColor !== "string") {
      console.error("Color must be a string.");
      return;
    }
    this.color = newColor;
  }

  getInfo() {
    return `This is a type of transport with max speed - ${this.maxSpeed}; color - ${this.color}; fuel - ${this.fuel}; distance traveled - ${this.distanceTraveled}`;
  }

  move(distance, fuelNeeded) {
    if (typeof distance !== "number" || typeof fuelNeeded !== "number") {
      console.error("Both distance and fuel needed must be numbers.");
      return;
    }
    if (fuelNeeded > this.fuel) {
      console.error("Not enough fuel to travel the given distance.");
      return;
    }
    this.fuel -= fuelNeeded;
    this.distanceTraveled += distance;
    console.log(`Moved ${distance} km. Remaining fuel: ${this.fuel}`);
  }
}

