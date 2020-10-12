const numberofFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i =0; i < 2; i++) {
    const a = prompt('One of the last film u see?', ''),
          b = prompt('How u will rate it?', '');
    
          if (a != null && b !=null && a !='' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('Krasava');  
          } else {
              console.log('dyrak');
              i--;
          }

    personalMovieDB.movies[a] = b;      
}
 
if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30){
    console.log("Достаточно много фильмов просмотренно");
} else if (personalMovieDB.count >= 30) {
    console.log("Ты гуру фильмов");
} else {
    console.log("Ошибочка вышла");
}

console.log(personalMovieDB);  