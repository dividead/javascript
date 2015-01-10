canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
width = 400
height = 400
first = {x: 0, y: 0, w: width, h: height}
gen = 0
canvas.width = width; canvas.height = height

flatten = (a)->
  unless a?
    return null
  else if a.length is 0
    return []
  else
    return ( a.reduce (l,r)->l.concat(r) )

tile = (a) ->
  ctx.beginPath()
  ctx.rect(a.x, a.y, a.w, a.h)
  ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16)
  ctx.fill()

split = (a) -> #Math.random() * (550 - 450) + 450; //45-55%
  cut = (a) ->
    c1 = {x: a.x, y: a.y, w: a.w, h: a.h}
    if c1.w > c1.h
      newX = Math.round(Math.random()*(a.w*0.1) + a.w*0.45)
      c1.w = newX
      c2 ={x: a.x + 5 + newX, y: a.y, w: a.w - newX - 5, h: a.h}
    else
      newY = Math.round(Math.random()*(a.h*0.1) + a.h*0.45);
      c1.h = newY
      c2 ={x: a.x, y: a.y + 5 + newY, w: a.w, h: a.h - newY - 5}
    if (((c1.w and c1.h) > 40) and (c2.w and c2.h) > 40) then [c1,c2] else a
  x = a.map (i) -> cut(i)
  gen++
  if gen < 4 then split flatten(x) else gen = 0; a
###

  a.map!{|i| cut(i)}
  @gen+=1
  @gen < 4 ? split(a.flatten(1)) : (@gen = 0; a)
end
p split([[0,0,400,400]]).flatten.each_slice(4).to_a

  x = a.map (i) -> [i/2,i+1]
  gen++
  if gen < 4 then split flatten(x) else gen = 0; a###
#end of split()

update = ->
  ctx.clearRect(0, 0, width, height)
  console.log split(first)
  #grid
  for i in [0...width] by 40 
    ctx.beginPath()
    ctx.strokeStyle = "rgba(255,255,255, 0.2)"
    ctx.moveTo(i, 0)
    ctx.lineTo(i, height)
    ctx.moveTo(0, i)
    ctx.lineTo(width, i)
    ctx.stroke()
    ctx.closePath()
  #requestAnimationFrame(update);
update()
