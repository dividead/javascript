let and = (x,y) => ({'00':0,'01':0,'10':0,'11':1})[`${x}${y}`]
let or = (x,y) => ({'00':0,'01':1,'10':1,'11':1})[`${x}${y}`]
let not = (x) => ({'0':1,'1':0})[x]
let nand = (x,y) => ({'00':1,'01':1,'10':1,'11':0})[`${x}${y}`]
let nor = (x,y) => ({'00':1,'01':0,'10':0,'11':0})[`${x}${y}`]
let xor = (x,y) => ({'00':0,'01':1,'10':1,'11':0})[`${x}${y}`]

function half_adder(a,b) {
  return {carry: and(a,b), sum: xor(a,b)}
}

function full_adder(a,b,c=0){
  let h1 = half_adder(a,b)
  let h2 = half_adder(h1.sum, c)
  return {carry: or(h1.carry, h2.carry),
          sum: h2.sum}
}

function adder(a, b=0, c=0){
  return { carry: xor(and(a,b),and(c,xor(a,b))), 
           sum: xor(xor(a,b),c) }
}

function bi(a) {
  a = a.toString(2)
  a = '0'.repeat(8 - a.length) + a
  return a.split('').reverse()
}

function de(a){
  return parseInt(a.join(''),2)
}

function sum(a,b){
  // [a,b] = [a,b].sort((a,b) => b - a)
  let r = [], c = 0
  a.map((e,i) => {
    let {carry, sum} = adder(a[i],b[i],c)
    r.push(sum)
    c = carry
  })
  // r.push(c)
  return r.reverse()
}
