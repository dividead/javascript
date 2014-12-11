function range(s,e,st){
  var a = []
  //if(typeof(st)==='undefined') st = 1
  st = st || 1
  if (st > 0)
    for(var i = s; i <= e; i+=st)
      a.push(i)
  else
    for(var n = s; n >= e; n+=st)
      a.unshift(n)
  return a
}

function sum(a){
  var total = 0
  for(var i in a)
    total+=a[i]
  return total
}

console.log(range(1,10));
console.log(sum(range(1, 10)));// → 55
console.log(range(5, 2, -1));// → [5, 4, 3, 2]
console.log(sum(range(5, 2, -1)));