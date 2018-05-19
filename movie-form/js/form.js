var movieArr = [];
var programArr = [];

function createMovie() {
    //1. Skupljanje podataka

    var titleElement = document.querySelector('#title');
    var lengthElement = document.querySelector('#length');
    var genreElement = document.querySelector("#genreSelect");

    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreElement.value;

    //2 Kreiranje instance FC Movie

    //ToDo provera
    var movie = new Movie(title, genre, length);
    movieArr.push(movie);

    //3 HTML ISPIS

    // Punjenje LISTE 
    var movieDataElement = document.querySelector('#movieData')
    var li = document.createElement('li')
    var movieData1 = document.createTextNode(movie.getData())

    li.appendChild(movieData1);
    movieDataElement.appendChild(li);


    // PUNJENJE DROPDOWN
    var movieSelect = document.querySelector("#movieSelect");
    var movieOption = document.createElement("option");
    var movieData2 = document.createTextNode(movie.getData())


    movieOption.appendChild(movieData2);
    movieSelect.appendChild(movieOption);







}

document.querySelector("#createMovie").addEventListener('click', function () {
    //
    createMovie();

    //
});





function createProgram() {

    // skupljanje podataka
    var dateElement = document.querySelector("#date");
    var date = dateElement.value;

    //Pravljenje Program objekata

    var newProgram = new Program(date);
    programArr.push(newProgram);


    //HTML ISPIS

    var programDataElement = document.querySelector("#programData");
    var li = document.createElement('li');
    var programData1 = document.createTextNode(newProgram.getData());

    li.appendChild(programData1);
    programDataElement.appendChild(li);


    var programSelect = document.querySelector("#programSelect");
    var option = document.createElement("option");
    var programData2 = document.createTextNode(newProgram.getData());


    option.appendChild(programData2);
    programSelect.appendChild(option);





}

document.querySelector("#createProgram").addEventListener('click', function () {
    //
    createProgram();

    //
});


function addMovie() {
    var movieSelect = document.querySelector("#movieSelect")

    var selectedMovieData = movieSelect.value;
    console.log('selectedMovieData');
    var selectedMovieIndex = movieSelect.selectedIndex;

    var programSelect = document.querySelector("#programSelect")

    var selectedProgramData = programSelect.value;
    var selectedProgramIndex = programSelect.selectedIndex;
    // console.log(selectedProgramData)
    // console.log(selectedProgramIndex);

    for (var i = 0; i < movieArr.length; i++) {


        if (movieArr[i].getData() === selectedMovieData) {

            var selectedMovie = movieArr[i];
            // console.log(selectedMovie)
        }
    }

    for (var i = 0; i < programArr.length; i++) {
        // var a = programArr[i].getData();
        // var b = selectedProgramData + '\n';
        // console.log(a.length);
        // console.log(b.length);


        if (programArr[i].getData() == selectedProgramData) {

            var selectedProgram = programArr[i];
            // console.log("EUREKA");

        }
    }


    selectedProgram.addMovie(selectedMovie);


    var programData1 = document.createTextNode(selectedProgram.getData());
    var programData2 = document.createTextNode(selectedProgram.getData());
    // var s1 = "#programData>:nth-child(" + (selectedProgramIndex + 1) + ") ";
    // var s2 = "#programSelect>:nth-child(" + (selectedProgramIndex + 1) + ") ";
    // console.log(s2)
    var li = document.createElement('li');
    var replacedLi = document.querySelector("#programData").children[selectedProgramIndex];

    var option = document.createElement('option');
    var replacedOption = document.querySelector("#programSelect").children[selectedProgramIndex]
    console.log(replacedOption);


    li.appendChild(programData1);
    option.appendChild(programData2)

    replacedLi.replaceWith(li);
    replacedOption.replaceWith(option);



}

document.querySelector("#addMoveToProgram").addEventListener('click', function () {
    //
    addMovie();

    //
});