   function Genre(name) {

       this.name = name;

   }
   Genre.prototype.getData = function () {
       var firstLetter = this.name[0].toUpperCase();
       var lastLetter = this.name[this.name.length - 1].toUpperCase();
       return firstLetter + lastLetter;
   }


   function Movie(objProp) {

       this.title = objProp.title;

       this.length = objProp.length;
       this.genre = new Genre(objProp.genreSelect);

   }

   Movie.prototype.getData = function () {

       return this.title + ", " + this.length + ", " + this.genre.getData();
   }







   function Program(objProp) {
       this.date = new Date(objProp.date);
       this.movies = [];
       this.totalMoviesProgram = 0;

   }

   Program.prototype.addMovie = function (Movie) {

       this.movies.push(Movie);
       this.totalMoviesProgram++;
   }

   Program.prototype.getData = function () {

       var totalLength = 0;
       var allMoviesData = ""

       for (var i = 0; i < this.movies.length; i++) {

           totalLength += parseInt(this.movies[i].length);
           allMoviesData += this.movies[i].getData() + "\n";

       }

       totalLength += " min"

       return this.date + ", " + totalLength + '\n' + allMoviesData;

   }