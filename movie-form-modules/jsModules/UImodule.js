let UImodule = (function () {


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

    let titleInput = $(UISelectors.titleSelector);
    let lengthInput = $(UISelectors.lengthSelector);
    let genreInput = $(UISelectors.genreSelector);
    let createMovieButton = $(UISelectors.createMovieButtonSelector);
    let dateInput = $(UISelectors.dateSelector);
    let createProgramButton = $(UISelectors.createProgramButtonSelector);
    let movieDropdown = $(UISelectors.movieDropdownSelector);
    let programDropdown = $(UISelectors.programDropdownSelector);
    let addMovieButton = $(UISelectors.addMovieSelector);
    let movieList = $(UISelectors.movieListSelector)
    let programList = $(UISelectors.programListSelector)


    function getMovieData() {
        let movieData = {};
        movieData.title = titleInput.val();
        movieData.length = lengthInput.val();
        movieData.genre = genreInput.val();

        return movieData;

    }

    function validateMovieData(movieData) {

        if (isNaN(movieData.length)) {

            alert("Unesite validnu duzinu filma!")
        }


    }


    function getProgramData() {
        let programData = {};
        programData.date = dateInput.val()
        return programData;

    }

    function getSelectedMovieAndProgramData() {

        let selectedMovieAndProgramData = {};

        selectedMovieAndProgramData.movie = movieInput.val();
        selectedMovieAndProgramData.program = programInput.val();

        return selectedMovieAndProgramData;

    }

    function renderMovie(newMovie) {

        let moviePrint = newMovie.getData();
        let li = $("<li>").text(moviePrint);
        movieList.append(li);
        let option = $("<option>").text(moviePrint);
        movieDropdown.append(option)


    }

    function renderProgram(newProgram) {

        let programPrint = newProgram.getData();
        let li = $("<li>").text(programPrint);
        programList.append(li);
        let option = $("<option>").text(programPrint);
        programDropdown.append(option)

    }

    function updateProgramList(){


    }




    return {
        UISelectors,
        getMovieData,
        getProgramData,
        getSelectedMovieAndProgramData,
        validateMovieData,
        renderMovie,
        renderProgram

    }



})();