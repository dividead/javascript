function every(a, f){
  return a.filter(function(x){return f(x) }).length == a.length
}

function some(a, f){
  return a.filter(function(x){return f(x) }).length > 0
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false