var entityModule = (function () {



    function Genre(name) {

        this.name = name;

    }
    Genre.prototype.getData = function () {
        let firstLetter = this.name[0].toUpperCase();
        let lastLetter = this.name[this.name.length - 1].toUpperCase();
        return firstLetter + lastLetter;
        return this.name;
    }


    function Movie(title, genre, length) {

        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;

    }




    Movie.prototype.getData = function () {

        return `${this.title}, ${this.length}, ${this.genre.getData()}`;

        // return this.title;
    }

    function createMovie(title, genre, length) {

        return new Movie(title, genre, length)
    }




    function Program(date) {
        this.date = new Date(date);
        this.movies = [];
        this.totalMoviesProgram = 0;

    }

    Program.prototype.addMovie = function (movie) {

        this.movies.push(movie);
        this.totalMoviesProgram++;
    }

    Program.prototype.getData = function () {

        let totalLength = 0;
        // var allMoviesData = ""

        for (let i = 0; i < this.movies.length; i++) {

            totalLength += parseInt(this.movies[i].length);
            // allMoviesData += this.movies[i].getData() + "\n";

        }


        return `${this.date.toDateString()}, ${this.totalMoviesProgram} movies, duration: ${totalLength}min `;

    }

    function createProgram(date) {

        return new Program(date);
    }
    return {

        createMovie,
        createProgram



    }




})();