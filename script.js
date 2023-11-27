const express = require('express')
const app = express()
const Movies = ["Interstellar","Oppenhiemer","Inception"]

app.get('/', function (req, res) {
  res.send('Hello World this is Ahmad')
})

app.listen(3000)
