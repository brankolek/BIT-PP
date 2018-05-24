let UiModule = (function () {


    let UISelectors = {

        titleSelector: "#title",
        lengthSelector: "#length",
        genreSelector: "#genre",
        createMovieButtonSelector: "#createMovie",
        dateSelector: "#date",
        createProgramButtonSelector: "#createProgram",
        movieDropdownSelector: "#movieDropdown",
        programDropdownSelector: "#programDropdown",
        addMovieSelector: "#addMovie",
        movieListSelector: "#movieList",
        programListSelector: "#programList"

    }

    let titieInput = $(UISelectors.titleSelector);
    let lengthInput = $(UISelectors.lengthSelector);
    let genreInput = $(UISelectors.genreSelector);
    let createMovieButton = $(UISelectors.createMovieButtonSelector);
    let dateInput = $(UISelectors.dateSelector);
    let createProgramButton = $(UISelectors.createProgramButtonSelector);
    let movieInput = $(UISelectors.movieDropdownSelector);
    let programInput = $(UISelectors.programDropdownSelector);
    let addMovieButton = $(UISelectors.addMovieSelector);
    let movieList = $(UISelectors.movieListSelector)
    let programList = $(UISelectors.programListSelector)


    function getMovieData() {
        let movieData = {};
        movieData.title = titleInput.value;
        movieData.length = lengthInput.value;
        movieData.genre = genreInput.value;

        return movieData;

    }

    function validateMovieData(movieData) {

        if (isNaN(movieData.length)) {

            alert("Unesite validnu duzinu filma!")
        }


    }


    function getProgramData() {
        let programData = {};
        programData.date = dateInput.value
        return programData;

    }

    function getSelectedMovieAndProgramData() {

        let selectedMovieAndProgramData = {};

        selectedMovieAndProgramData.movie = movieInput.value;
        selectedMovieAndProgramData.program = programInput.value;

        return selectedMovieAndProgramData;

    }

    function renderMovie(newMovie) {

        let moviePrint = newMovie.getData();
        let li = $("<li>").text(moviePrint);
        movieList.append(li);

    }

    function renderProgram(newProgram) {

        let programPrint = newProgram.getData();
        let li = $("<li>").text(programPrint);
        programList.append(li);

    }




    return {
        UISelectors,
        getMovieData,
        getProgramData,
        getSelectedMovieAndProgramData,
        validateMovieData

    }



})();