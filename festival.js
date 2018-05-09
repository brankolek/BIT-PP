
// SVE JE U IIFE DA BI SE ZASTITIO OSTATAK PROGRAMA
(function () {
    // TEORIJA 


    //Object literal notationa 

    // var a = {

    //     key: value,  // PROPERTIE

    //     key: function(param.){  //METHOD

    //         //code
    //     }
    // }




    //PROGRAM 


    //FUNCTION CONSTRUCTOR

    function Genre(name) {

        this.name = name;
        this.getData = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            return firstLetter + lastLetter;

        }

    }

    function Movie(title, genre, length) {

        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;

        this.getData = function () {

            return this.title + ", " + this.length + ", " + this.genre.getData();
        }
    }


    function Program(datum) {
        this.date = new Date(datum);
        this.movies = [];
        this.totalMoviesProgram = 0;
        this.addMovie = function (Movie) {

            this.movies.push(Movie);
            this.totalMoviesProgram++;
        }

        this.getData = function () {

            var totalLength = 0;
            var allMoviesData = ""

            for (var i = 0; i < this.movies.length; i++) {

                totalLength += parseInt(this.movies[i].length);
                allMoviesData += this.movies[i].getData() + "\n";

            }

            totalLength += " min"

            return this.date + ", " + totalLength + '\n' + allMoviesData;

        }

    }


    function Festival(name) {
        this.name = name;
        this.programs = [];
        this.totalMoviesFestival = 0;
        this.addProgram = function (Program) {

            this.programs.push(Program);
            this.totalMoviesFestival += Program.totalMoviesProgram;

        }

        this.getData = function () {

            var allProgramsData = "";

            for (var i = 0; i < this.programs.length; i++) {

                allProgramsData += this.programs[i].getData() + "\n"

            }

            return this.name + " has " + this.totalMoviesFestival + " movie titles" + "\n" + allProgramsData;

        }

    }






    // KREIRANJE OBJEKATA BATMAN,RING,SUPERMAN,FRIENDS KLASE MOVIE
    var batman = new Movie("batman", "action", "140min");
    var ring = new Movie("ring", "horor", "120min")
    var superman = new Movie("superman", "action", "95min")
    var friends = new Movie("friends", "comedy", "113min")

    // KREIRANJE OBJEKATA FIRSTDAY i SECONDDAY KLASE PROGRAMS 
    var firstDay = new Program("08/05/2018");
    var secondDay = new Program("09/05/2018");


    // KREIRANJE OBJEKATA FEST KLASE FESTIVAL
    var fest = new Festival("fest");



    // "Dodavanje objekata batmana, ring objektu firstDay"
    firstDay.addMovie(batman);
    firstDay.addMovie(ring);

    // "Dodavanje objekata superman, friends objektu secondDay"
    secondDay.addMovie(superman);
    secondDay.addMovie(friends);


    // "Dodavanje objekata fristDay, secondDay objektu fest"
    fest.addProgram(firstDay);
    fest.addProgram(secondDay);





    // FUNKCIJE WRAPERI KONSTRUKTOR FUNCKIJA


    //Fja za kreiranje objekata klase Movie 
    function createMovie(title, length, genre) {


        return new Movie(title, length, genre);
    }

    //Fja za kreiranje objekata klase Program
    function createProgram(date) {


        return new Program(date);
    }



    //Kreiranje objekata Interstelar koji je klase MOVIE

    var interstelar = createMovie("Interstelar", "Sci-fi", "180min")

    //Kreiranje objekata ThirdDay koji je klase PROGRAM
    var thirdDay = createProgram("10/05/2018");

    //Dodavanje objekata Interstelar objektu ThirdDay
    thirdDay.addMovie(interstelar);

    //Dodavanje objeakata thirDay objektu fest
    fest.addProgram(thirdDay);

    //Ispis svih podataka o festivalu! 
    console.log(fest.getData())

















































})();