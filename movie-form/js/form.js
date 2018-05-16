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

    var selectedMovies = [];
    for (var i = 0; i < movieSelect.options.length; i++) {
        if (movieSelect.options[i].selected == true) {
            selectedMovies.push(movieSelect.options[i].value)
        }
    }


    var programSelect = document.querySelector("#programSelect")

    var selectedProgram = programSelect.options[programSelect.selectedIndex].value;





}