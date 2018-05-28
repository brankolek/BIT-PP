function Program(datum) {
    this.date = new Date(datum);
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


module.exports = {
    Program
}