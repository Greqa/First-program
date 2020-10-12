const numberofFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('One of the last film u see?', ''),
      b = prompt('How u will rate it?', ''),
      c = prompt('One of the last film u see?', ''),    
      d = prompt('How u will rate it?', '');
      
 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);      
