console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(s, ...a){
  var r = s[0]
  for(var i = 0; i< a.length; i++){
    r+= a[i].replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;') + s[i+1]
  }
  return r
}