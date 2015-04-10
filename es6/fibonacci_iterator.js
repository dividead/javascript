function f(n){
  function* fib(){
    let n1 = 0
    let n2 = 1
    yield n1
    yield n2
    while(true){
        let s = n2 + n1
        n1 = n2
        n2 = s
        yield s
    }
  }
  
  let it = fib()
  let a = []
  
  for(let i = 0; i < n; i++){
    a.push(it.next().value)
  }
  return a
}

console.log(f(50))
