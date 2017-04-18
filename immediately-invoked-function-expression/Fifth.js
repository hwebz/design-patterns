var v, getValue1, getValue2, getValue3, fifth = document.getElementById('Fifth');
v = 1;
getValue1 = function() {
    return v;
};

getValue2 = (function(x) {
  return function() { return x; }
})(v);

function f(x) {
  return function() { return x; }
}
getValue3 = f(v);

v = 2;

fifth.innerHTML = getValue1() + ", " + getValue2() + ", " + getValue3(); // 2
