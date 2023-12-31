const express = require('express')
const app = express()
app.use(express.json());

const movies = ["Interstellar","Oppenheimer","Inception", "Tenet"]

// Welcome Page
app.get('/', function (req,res) {
  res.send('Hey, Welcome to the Movie Mania')
})

// Get all movies
app.get("/api/movies",function(req, res){
  res.send(movies);
});

// Get a specific movie at a specific index
app.get("/api/movies/:index",function(req, res){
  if(!movies[req.params.index])
  {
    return res.status(400).send("Movie not found.");
  }
  res.send(movies[req.params.index]);
});

// Update a specific index
app.put("/api/movies/:index",function(req, res){
  movies[req.params.index]=req.body.name;
  res.send(movies[req.params.index]);
});

// Delete a specific index 
app.delete("/api/movies/:index",function(req, res){
  movies.splice(req.params.index,1)
  res.send(movies);
});

// Add a specific index 
app.post("/api/movies",function(req, res){
  movies.push(req.body.name);
  res.send(movies);
});

app.listen(3000)
