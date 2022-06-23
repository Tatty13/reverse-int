module.exports = function reverse (n) {
  n = Math.abs(n);
  let result = n.toString(10).split('').reverse().join('');
  return +result;
}
