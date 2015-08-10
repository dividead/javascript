function pascal(r,c){
    if (c > r) return 0
    if (c < 0) return 0
    if (c == 1) return 1
    return pascal(r-1,c-1) + pascal(r-1,c)
}
