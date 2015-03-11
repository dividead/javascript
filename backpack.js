function solution(x,a){
    var b = a.map(function(m){
        return m == x ? 0 : 1
    }) 
    var a1 = b[0] === 0 ? 1 : 0
    var a2 = b.slice(1).filter(function(x){return x===1}).length
    for(var i = 1; i < b.length; i++){
        if(b[i] === 0) a1++
        a2 -= b[i]
        if(a1 > 0 && a1 === a2) return i+1
    }
    return -1
}

var a = [] //A
var N = 10000 //N
var n = ~~(Math.random()*N) //X
for(var i = 0; i < N; i++){
    a.push(~~(Math.random()*N)) 
}

console.log(solution(n,a))
console.log(solution(5,[5,5,1,7,2,3,5]))
