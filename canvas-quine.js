!function $(){var c=document.getElementById('c'),
ctx=c.getContext('2d'),a=('!'+$+'()').split(''),
l=~~Math.sqrt(a.length),w=285;c.width=w;
c.height=w;ctx.clearRect(0,0,w,w);for(var 
x=0;x<=l;x++){for(var y=0;y<=l;y++){ctx.
beginPath();ctx.rect(x*15,y*15,15,15);ctx.
fillStyle='#'+Array(2).join(a[x*15+y].
charCodeAt(0).toString(8));ctx.fill()}}}()
