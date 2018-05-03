// function declaration OVA SE HOJSTUJE 
// function name(paramater){





// }


// function expression OVO SE NE HOJSTUJE 

// var a = function (parameter) {

//KOD 

// };

// IIFE 

// ( function(paramater){

//     //KOD 

// })(paramater);



//***********************PRVI ZADATAK  *********************/

// var a = [4, 5, 11, 9];

// (function (arr) {
//     var tmp;
//     tmp = arr[0]
//     arr[0] = arr[arr.length - 1]
//     arr[arr.length - 1] = tmp;
//     console.log(arr);

// })(a);


//***********************DRUGI ZADATAK  *********************/


// var a = 4;
// var b = 5;

// var c = (function (a, b) {
//     var area = a * b;

//     console.log(area);
//     // return area;

// })(a, b);

// console.log(c);

//***********************TRECI ZADATAK  *********************/
/*
var string = "prograMming";

(function (string) {

    var counter = 0;
    var output = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'm' || string[i] === 'M') {
            output += '*';
            counter++;
        } else {
            output += string[i];
        }
    }
    console.log(output, counter);

})(string);
*/

//***********************CETVRTI ZADATAK  *********************/

// var name = "Aleksandar";
// var surName = "Radakovic";

// (function (name, surName) {
//     console.log("Suggested mail address is: " + name + "." + surName + "@gmail.com");

// })(name, surName);


//***********************PETI ZADATAK  *********************/

// var input = 034;;

// var output = (function (input) {
//     return parseInt(input);
// })(input);

// console.log(output)

//***********************SESTI ZADATAK  *********************/

// var pass = 'Kuaa';

// (function (str, successCallback, errorCallback) {
//     var value = false;
//     // logika 
//     if (str.length >= 6) {
//         for (var j = 0; j < str.length; j++) {
//             if (!isNaN(parseInt(str[j]))) {
//                 value = true;
//             }
//         }
//     }
//     // 
//     if (value === true) {
//         successCallback()
//     } else {
//         errorCallback()
//     }
// })(pass, function () { console.log("OK") }, function () { console.log("NO") })







/***********************SESTI ZADATAK  ******************** original sol
/*

var arr = [2, 8, 11, 4, 9, 3];


//main function;
function filter(arr, condition) {
    var j = 0;
    var result = [];
    for (i = 0; i < arr.length; i++) {

        if (condition(arr[i])) {
            result[j] = arr[i];
            j++;
        }
    }
    return result;
}

//sub function;
function condition(element) {
    var index = false;
    if (element % 2 !== 0) {

        index = true;
    }
    return index;
}

console.log(filter(arr, condition));


*/






//*************** */ SOLUTION USING ANONYM*************
/*

var arr = [2, 8, 11, 4, 9, 3];


//main function;
var result = (function (arr, condition) {
    var j = 0;
    var result = [];
    for (i = 0; i < arr.length; i++) {

        if (condition(arr[i])) {
            result[j] = arr[i];
            j++;
        }
    }
    return result;
})(arr, function (element) {
    var index = false;
    if (element % 2 !== 0) {

        index = true;
    }
    return index;
});
//sub function;


console.log(result);




*/