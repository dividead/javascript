function deepEqual(a,b){
//   if (typeof a == 'object' && typeof b == 'object' && a !== null && b !== null)
//     if (Object.keys(a).length == Object.keys(b).length)
//       for (var k in a)
//         deepEqual(a[k],b[k])
//     else
//       return false
//   else
//     return a==b
}




var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true