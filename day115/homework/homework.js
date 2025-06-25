class Shape {
  constructor(length, width, color, coordinates) {
    this.length = length;
    this.width = width;
    this.color = color;
    this.coordinates = coordinates;
  }
  changeLength(newLength) {
    this.length = newLength;
  }
  changeWidth(newWidth) {
    this.width = newWidth;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  changeCoordinates(newCoordinates) {
    this.coordinates = newCoordinates;
  }
  draw() {
    console.log(
      coordinates, length, width, color);
  }
}