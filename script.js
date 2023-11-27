const express = require('express')
const app = express()
const movies = ["Interstellar","Oppenheimer","Inception", "Tenet"]

app.get('/', function (req,res) {
  res.send('Hey, Welcome to the Movie Mania')
})

app.get("/api/movies",function(req, res){
  res.send(movies);
});
app.get("/api/movies/:index",function(req, res){
  if(!movies[req.params.index])
  {
    return res.status(400).send("Movie not found.")
  }
  res.send(movies[req.params.index]);
});



app.listen(3000)
