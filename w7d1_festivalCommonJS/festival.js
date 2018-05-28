 function Festival(name) {
     this.name = name;
     this.programs = [];
     this.totalMoviesFestival = 0;

 }

 Festival.prototype.addProgram = function (Program) {

     this.programs.push(Program);
     this.totalMoviesFestival += Program.totalMoviesProgram;

 }
 Festival.prototype.getData = function () {

     var allProgramsData = "";

     for (var i = 0; i < this.programs.length; i++) {

         allProgramsData += this.programs[i].getData() + "\n"

     }

     return this.name + " has " + this.totalMoviesFestival + " movie titles" + "\n" + allProgramsData;

 }

 module.exports = {
     Festival
 }