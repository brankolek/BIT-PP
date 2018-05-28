var genre = require('./genre');
var movie = require('./movie');
var program = require('./program');
var festival = require('./festival');


var batman = new movie.Movie("batman", "action", "140min");
var ring = new movie.Movie("ring", "horor", "120min")
var superman = new movie.Movie("superman", "action", "95min")
var friends = new movie.Movie("friends", "comedy", "113min")

console.log(batman)

// KREIRANJE OBJEKATA FIRSTDAY i SECONDDAY KLASE PROGRAMS 
var firstDay = new program.Program("08/05/2018");
var secondDay = new program.Program("09/05/2018");


// KREIRANJE OBJEKATA FEST KLASE FESTIVAL
var fest = new festival.Festival("fest");



// "Dodavanje objekata batmana, ring objektu firstDay"
firstDay.addMovie(batman);
// Program.prototype.addMovie.call(firstDay, ring);

// "Dodavanje objekata superman, friends objektu secondDay"
secondDay.addMovie(superman);
secondDay.addMovie(friends);


// "Dodavanje objekata fristDay, secondDay objektu fest"
fest.addProgram(firstDay);
fest.addProgram(secondDay);

console.log(fest)