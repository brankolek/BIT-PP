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

    var selectedMovies = [];
    for (var i = 0; i < movieSelect.options.length; i++) {
        if (movieSelect.options[i].selected == true) {
            selectedMovies.push(movieSelect.options[i].value)
        }
    }


    var programSelect = document.querySelector("#programSelect")

    var selectedProgram = programSelect.options[programSelect.selectedIndex].value;





}