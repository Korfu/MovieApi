POST /movies
Request body should contain only movie title, and its presence will be validated.
Based on passed title, other movie details will be fetched from http://www.omdbapi.com/  - and should be saved to application database, unfortunately couldn't parse JSON that i receive as response into my Movie model. So what is saved is object that merely has an unique id.
Request response includes full movie object, along with all data fetched from external API.

GET /movies
Fetches list of all movies already present in application database.
Additional filtering is available:
/api/movies/ID will display only the title with given ID
/api/movies?query=* will display a list of movies that have queried property. If quried property doesn't exist or is invalid, the whole list will be fetched.
navigating is assisted by addition of a self-described link to each movie in database

POST /comments
Request body should contain ID of movie already present in database, and comment text body.
Comment should be saved to application database and returned in request response.
Doesn't really work well, instead there is default comment created with each post of movie

GET /comments
Fetches list of all comments present in application database.
Allows filtering comments by associated movie, by passing its ID.
To do it, use /api/movies/_id

To launch app, use gitbash command:
$ heroku open
$ gulp

app is connected to mongoDB database
