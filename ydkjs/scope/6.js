var f = (n) => {
  return n > 1 ? n*f(n-1) : 1
}

console.log(((x) => {return x*2})(4))
console.log(f(10))