function countBs(x){
  var count = 0
  for (var i = 0; i < x.length; i++)
    if (x.charAt(i) === 'B') count++
  return count
}

function countChar(x,l){
  var count = 0
  for (var i = 0; i < x.length; i++)
    if (x.charAt(i) === l) count++
  return count
}

console.log(countBs("BBC"))
// → 2
console.log(countChar("kakkerlak", "k"))
// → 4