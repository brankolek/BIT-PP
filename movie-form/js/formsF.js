var movieArr = [];
var programArr = [];


function getHTML(inputSelectorsArr) {
    var objProp = {};
    for (var i = 0; i < inputSelectorsArr.length; i++) {

        var name = document.querySelector(inputSelectorsArr[i]).id

        var value = document.querySelector(inputSelectorsArr[i]).value
        objProp[name] = value;
    }

    return objProp;
}

function createObj(FC, objProp, objArr) {

    var obj = new FC(objProp);
    objArr.push(obj);
    return obj

}


function printHTML(outElements, outChildren, obj, option, dropdown) {

    for (var i = 0; i < outElements.length; i++) {

        var dataElement = document.querySelector(outElements[i]);
        var outHTML = document.createElement(outChildren[i]);
        if (outChildren[i] === "li") {
            outHTML.classList.add("list-group-item");
        }
        var Data = document.createTextNode(obj.getData());
        outHTML.appendChild(Data);

        if (option === "replace") {

            var index = document.querySelector(dropdown).selectedIndex;
            var replacedElement = document.querySelector(outElements[i]).children[index];
            replacedElement.replaceWith(outHTML);

        } else {

            dataElement.appendChild(outHTML);

        }

    }

}


function create(FC, objArr, outElements, outChildren, inputSelectorsArr) {

    var objProp = getHTML(inputSelectorsArr);
    var newObj = createObj(FC, objProp, objArr)

    printHTML(outElements, outChildren, newObj, "apend")


}


function findObj(objArr, selectedData) {
    var selectedObj;
    for (var i = 0; i < objArr.length; i++) {

        console.log(objArr[i].getData().length)
        if (selectedData === objArr[i].getData()) {

            selectedObj = objArr[i];

        }
    }
    return selectedObj;
}


function addMovie() {

    var movieSelect = document.querySelector("#movieSelect")
    var selectedMovieData = movieSelect.value;

    var programSelect = document.querySelector("#programSelect")
    var selectedProgramData = programSelect.value;


    var selectedMovie = findObj(movieArr, selectedMovieData);
    var selectedProgram = findObj(programArr, selectedProgramData);

    selectedProgram.addMovie(selectedMovie);

    printHTML(["#programData", "#programSelect"], ["li", "option"], selectedProgram, "replace", "#programSelect")

}

document.querySelector("#createMovie").addEventListener('click', function () {
    //
    create(Movie, movieArr, ["#movieData", "#movieSelect"], ["li", "option"], ["#title", "#length", "#genreSelect"])

    //
});

document.querySelector("#createProgram").addEventListener('click', function () {
    //
    create(Program, programArr, ["#programData", "#programSelect"], ["li", "option"], ["#date"])

    //
});

document.querySelector("#addMovie").addEventListener('click', function () {
    //
    addMovie();

    //
});