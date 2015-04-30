function *fb(n=1){
  while(true){
    yield ((n%3===0 ? 'fizz' : '') + (n%5===0 ? 'buzz' : '')) || n
    n++
  }
}
let it = fb()
for(let i = 1; i <= 15; i++) console.log(it.next().value)
