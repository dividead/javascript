module.exports = function average(...a){
  return a.reduce((x,y)=>x+y)/a.length
}