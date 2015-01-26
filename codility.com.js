var A =   [-1, 3, -4, 5, 1, -6, 2, 1] 

function solution(A) {
    var x = A.length
    var r = -1
    function sl(a){
        if (a.length === 0) return 0
        if (a.length === 1) return a[0]
        return a.reduce(function(a,b){return a+b})
    }
    for(var i = 1; i < x; i++){
        //console.log(A.slice(0,i),A.slice(i+1,x))
        //console.log(sl(A.slice(0,i)),sl(A.slice(i+1,x)))
        if (sl(A.slice(0,i)) === sl(A.slice(i+1,x))) {
            r = i
            break;
        }
    }
    return r
}

solution(A)

//A zero-indexed array A consisting of N integers is given. 
//An equilibrium index of this array is any integer P such that 0 ≤ P < N 
//and the sum of elements of lower indices is equal to the sum of elements of higher indices, i.e. 
//A[0] + A[1] + ... + A[P−1] = A[P+1] + ... + A[N−2] + A[N−1].
//Sum of zero elements is assumed to be equal to 0. This can happen if P = 0 or if P = N−1.
