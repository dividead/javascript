function a(x,y){
    if (y === 0) return 0
    if (x === 0) return y*2
    if (y === 1) return 2
    return a(x-1,a(x,y-1))
}
