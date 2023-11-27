## Movie Mania API

Welcome to the Movie Mania API, a simple REST API built using Express.js that allows you to manage a list of movies. This API provides endpoints for creating, retrieving, updating, and deleting movies, enabling you to effectively manage your movie collection.


### Endpoints and Usage

The Movie Mania API provides various endpoints for managing your movie collection. Here's a summary of the available endpoints and their usage:

1. **Welcome Page:**
   - Endpoint: `GET /`
   - Description: Displays a welcome message upon accessing the API.

2. **Get All Movies:**
   - Endpoint: `GET /api/movies`
   - Description: Retrieves a list of all movies currently stored in the API.

3. **Get a Specific Movie:**
   - Endpoint: `GET /api/movies/:index`
   - Description: Retrieves the movie associated with the specified index.
   - Example usage: `http://localhost:3000/api/movies/2` to get the third movie in the list.

4. **Update a Specific Movie:**
   - Endpoint: `PUT /api/movies/:index`
   - Description: Updates the movie at the specified index with the provided movie data.
   - Example usage:
      `PUT http://localhost:3000/api/movies/2 '{"name": "Inception"}'`
      to update the third movie's name to "Inception".

5. **Delete a Specific Movie:**
   - Endpoint: `DELETE /api/movies/:index`
   - Description: Removes the movie from the list at the specified index.
   - Example usage: `DELETE http://localhost:3000/api/movies/2` to delete the third movie from the list.

6. **Add a New Movie:**
   - Endpoint: `POST /api/movies`
   - Description: Adds a new movie to the list with the provided movie data.
   - Example usage:
      `POST http://localhost:3000/api/movies '{"name": "The Matrix"}'`
      to add a new movie named "The Matrix" to the list.


Feel free to experiment with these endpoints and explore the possibilities of managing your movie collection using the Movie Mania API.