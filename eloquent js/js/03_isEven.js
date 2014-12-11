function isEven(x) {
  if (x < 0) x = -x
  return x===0 ? true : x===1 ? false : isEven(x-2)
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))