let dataModule = (function () {


    var movieArr = [];


    var pushMovie = function (newMovie) {

        movieArr.push(newMovie);

        return movieArr;

    }


    var programArr = [];


    var pushProgram = function (newProgam) {

        programArr.push(newProgam);

        return programArr;

    }












    return {

        pushMovie,
        pushProgram,

    }




})();