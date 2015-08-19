function lispMap(f, ...a){
  return a.map((m,i) => (a.map((n) => n[i]).reduce(f)))
}

lispMap((x,y)=>{return x+y}, [1,2,3],[4,5,6],[7,8,9]) //[12,15,18]
lispMap((x,y)=>{return x*y}, [1,2,3],[4,5,6],[7,8,9]) //[28,80,162]
lispMap((x,y)=>{return x-y}, [1,2,3],[4,5,6],[7,8,9]) //[-10,-11,-12]
lispMap((x,y)=>{return x*x + 2*x*y + y}, [1,2,3],[4,5,6],[7,8,9]) //[358,1313,3528]
