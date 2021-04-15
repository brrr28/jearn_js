// РЕЙТИНГ ФИЛЬМОВ
const personalMovieRating = { 
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
// Записывает в count данные из промпта про количество просмотренных фильмов
    start: function () {
            personalMovieRating.count = +prompt('Сколько фильмов вы посмотрели?')
            
            while (this.count === null || this.count === '' || isNaN(this.count)){
                start()
            }
    },
// записывает в movies просмотренный фильм и твою оценку этого фильма
    go: () => {
        for (let i = 0; i < 2; i++){
            let a = prompt('Один из последних просмотреных фильмов?', ''),
            b = prompt('На сколько вы его оцените?', '')
        
            if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50){
                personalMovieRating.movies[a] = b;
                console.log('done')
            } else {
                console.log('error')
                i--;
            }
        }
    },
// на основе count определяет насколько ты хорош в просмотре фильмов
    detectPersonalLevel: () => {
        if (personalMovieRating.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieRating.count >= 10 && personalMovieRating.count <= 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieRating.count >= 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }
    },
// Показывает приватность нашего обьекта
    showMyDB: (hidden) => {
        if (!hidden) {
        console.log(personalMovieRating)
        }
    },
// Записываем в поле жанры наши любимые жанры из промпта
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase()
            
            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще')
                i--;
            } else {
                personalMovieRating.genres = genres.split(', ');
                personalMovieRating.genres.sort();
            }

            // if (genre === '' || genre === null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вообще')
            //     i--;
            // } else {
            //     personalMovieRating.genres[i - 1] = genre;
            // }
        }
        personalMovieRating.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} это ${item}` )
        });
    },
// Изменяем видимость нашей функции свойства privat 
    toggleVisibleMyDB: () => {  
        if (personalMovieRating.privat) {
            personalMovieRating.privat = false;
        } else {
            personalMovieRating.privat = true;
        }
    }
}

