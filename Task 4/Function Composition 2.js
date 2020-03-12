function compose(f, g) {
  var ans = function (...n) {
    return f(g(...n));
  }
  return ans;
}