const movies = require("./movies")
const cast  = require("./cast")

// 1)una fn que devuelva las movies con su cast

// 2)una fn que devuelva todas las movies de un genero
function getMoviesByGenre(genre) {
    let moviesByGenre = movies.filter((movie) => {
        let splitGenre = movie.genres.split('|');
        return splitGenre.includes(genre);
   });
   //paso el array a un array de STRINGS
   return moviesByGenre.map((movie) => {
        return movie.movie;
   });
}

// console.log(getMoviesByGenre("IMAX"));

// 3) una fn que devuelva todas las movies de un actor (se le pasa el id, no el nombre)
function getMovieIdActor(castId) {
    let castsMovies = movies.filter((movie) => {
      return movie.casts.includes(castId);
    });
    return castsMovies.map((movie) => {
        return movie.movie;
    });
}
// console.log(getMovieIdActor(189))
// 4) una fn para agregar release date a una movie

// 5) un fn para agregar una nueva movie y su cast
function addMovieAndCast(movie, genres, casts) {
    // let lastId = movies.reverse()[0].id;  
    let lastId = movies[movies.length-1].id; 
    let newMovie = {};
    newMovie.id = lastId + 1;
    newMovie.movie = movie;
    newMovie.genres = genres;
    newMovie.casts = casts;
    movies.push(newMovie);
    // por convencion siempre retornar el nuevo valor agregado
    return newMovie;

}
console.log(addMovieAndCast("Avengers End Game", "IMAX", [23,54,2,67,12]));

// 6) una fn para eliminar una movie
// 7) una fn que devuelva la info de una pelicula
function getMovieInfo(movieId) {
    let movieFilter = movies.filter((movie) => {
        return movie.id == movieId;
    });
    return movieFilter.map((movie) => {
        let castsNames = movie.casts.map((id) => {
            //_ marco que es algo interno o privad - solo se utiliza aca!
            let names = cast.find((_cast) => {
                return _cast.id == id;
            });
            return `${names.first_name} ${names.last_name}`;
        });
        return `The name of the movie: ${movie.movie}, The genre of this movie: ${movie.genres} and it's cast: ${castsNames.toString()}`
    });
}
console.log(getMovieInfo(5));
// 8) fn peliculas  a estrenar

