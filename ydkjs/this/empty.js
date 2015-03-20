function foo(a,b) {
    console.log( "a:" + a + ", b:" + b )
}

var ø = Object.create( null )

foo.apply( ø, [2, 3] )

var bar = foo.bind( ø, 2 )
bar( 3 )