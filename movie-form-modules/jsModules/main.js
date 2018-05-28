var mainModule = (function (UImodule, entityModule) {


    function addCreateMovieListener() {

        let createMovieButton = $(UImodule.UISelectors.createMovieButtonSelector)

        createMovieButton.on("click", function () {

            let movieData = UImodule.getMovieData()

            let newMovie = entityModule.createMovie(movieData.title, movieData.genre, movieData.length);

            let movieArr = dataModule.pushMovie(newMovie);

            UImodule.renderMovie(newMovie);

        })
    }

    function addCreateProgramListener() {

        let createProgramButton = $(UImodule.UISelectors.createProgramButtonSelector)

        createProgramButton.on("click", function () {

            let programData = UImodule.getProgramData()

            let newProgram = entityModule.createProgram(programData.date)

            let programArr = dataModule.pushProgram(newProgram);
            console.log(programArr)
            UImodule.renderProgram(newProgram);

        })
    }


    function addAddMovieListener() {

        let addMovieButton = $(UImodule.UISelectors.addMovieButton)


        addMovieButton.on("click", function () {


            var selectedData = UImodule.getSelectedMovieAndProgramData()

            var selectedMovie;
            var selectedProgram;


            for (var i = 0; i < movieArr.length; i++) {

                if (selectedData.movie === movieArr[i].getMovieData()) {

                    selectedMovie = movieArr[i];

                }
            }
            for (var i = 0; i < programArr.length; i++) {

                if (selectedData.program === programArr[i].getProgramData()) {

                    selectedProgram = programArr[i];

                }
            }

            selectedProgram.addMovie(selectedMovie);


            UImodule.updateProrgramList(selectedProgram)








        })





    }


























    return {

        init: function () {

            console.log("Init...")
            addCreateMovieListener();
            addCreateProgramListener();
            addAddMovieListener();

        }
    }



})(UImodule, entityModule);


mainModule.init();