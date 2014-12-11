function reverseArray(a){
  var b = []
  for (var i = a.length-1; i >= 0; i--)
    b.push(a[i])
  return b
}

function reverseArrayInPlace(a){
  for (var i = 1; i <= a.length; i++)
    a.push(a.splice(-i,1)[0])
  return a
}

var a = ["A", "B", "C"]
console.log(reverseArray(a)); // → ["C", "B", "A"];
console.log(a)
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]