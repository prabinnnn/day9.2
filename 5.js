function triangle(a, b, c) {
  let vol = a * b * c;
  let sum = (1 / 2) * a * b * c;
  return vol, sum;
}
console.log(triangle(1, 2, 3));
