function f() {
  this.c++
}
f.c = 0
for(var i = 0; i < 10; f.call(f,i++)){}
console.log(f.c)