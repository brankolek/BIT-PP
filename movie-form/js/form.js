var movieArr = [];
var programArr = [];




function getHTML(inputSelectorsArr) {
    var objProp = {};
    for (var i = 0; i < inputSelectorsArr.length; i++) {

        var name = document.querySelector(inputSelectorsArr[i]).id

        var value = document.querySelector(inputSelectorsArr[i]).value
        values[name] = value;
    }


    return objProp;
}

function createObj(FC, objProp, objArr) {

    var obj = new FC(objProp);
    objArr.push(obj);
    return obj

}


function priintHTML(obj, ulSelector, selectSelector) {
    var dataElement = document.querySelector(ulSelector);
    var li = document.createElement('li');
    var programData1 = document.createTextNode(obj.getData());
    li.appendChild(programData1);
    dataElement.appendChild(li);
    var select = document.querySelector(selectSelector);
    var option = document.createElement("option");
    var programData2 = document.createTextNode(obj.getData());
    option.appendChild(programData2);
    select.appendChild(option);


}


function create(FC, objArr, outputUl, outputSelect, inputSelectorsArr) {

    var objProp = getHTML(inputSelectorsArr);
    var newObj = createObj(FC, objProp, objArr)
    priintHTML(newObj, outputUl, outputSelect);
}




document.querySelector("#createMovie").addEventListener('click', function () {
    //
    create(Movie, movieArr, "#movieData", "#movieSelect", ["#title", "#length", "#genreSelect"])

    //
});


document.querySelector("#createProgram").addEventListener('click', function () {
    //
    create(Program, programArr, "#programData", "#programSelect", ["#date"])

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