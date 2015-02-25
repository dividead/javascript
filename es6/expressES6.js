var app = require('express')()
app.get('/', (req, res) => res.send('harmony'))
app.listen(3000,() => console.log('working on :3000'))