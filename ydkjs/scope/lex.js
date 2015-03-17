var bar = function(){
  var a = 5
  function foo(x){
    console.log(this)
  }
  foo(5)
}

bar()