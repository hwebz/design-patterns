// Don't need parenthesis
var f = function() {
  document.getElementById('Fourth').innerHTML = '4th way: assign to variable';
}();

console.log(true && function() { return false;}());

(function(a, b) {
  return a + b;
})(5, 10);

let b = 5, c = 6;
let a = b + c // avoid c(...)
;(function () {
  document.getElementById('Fourth').innerHTML = '4th way: using semicolon in front of function';
})();
