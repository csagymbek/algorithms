// Write a function areaCircle(radius) that returns the "area of a circle" with the given radius. The area should be rounded down to the nearest whole number.
// "Area of Circle" = PI * radius * radius
function areaCircle(radius){
  return Math.floor(Math.PI * Math.pow(radius, 2));
}
console.log(areaCircle(5));//78
console.log(areaCircle(3));//28
