function arrayToList(a){
  var h = {}
  h.value = a[0]
  a.shift()
  h.rest = a.length > 0 ? arrayToList(a) : null
  return h
}

function listToArray(l, a){
  a = a || []
  a.push(l.value)
  if (l.rest !== null) listToArray(l.rest, a)
  return a
}

function prepend(h,t){
  return {value: h, rest: t}
}

function nth(l,i){
  return i === 0 ? l.value : nth(l.rest,--i)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20