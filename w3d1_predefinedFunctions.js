// ******************************** PRVI ZADATAK ********************************


// function stringsToNum(arr) {
//     var arrResult = [];
//     var j = 0;
//     for (var i = 0; i < arr.length; i++) {

//         if (isFinite(parseFloat(arr[i]))) {
//             arrResult[j] = parseFloat(arr[i]);
//             j++;
//         } 

//     }

//     return arrResult;
// }

// var a = ["1", "21", undefined, "42", "1e+3", Infinity];


// console.log(stringsToNum(a));

// ******************************** DRUGI ZADATAK ********************************


// function toString(a) {
//     var arrResult = "";
//     for (i = 0; i < a.length; i++) {
//         if (isFinite(a[i]) && !!parseInt(a[i])) {
//             arrResult = arrResult + parseFloat(a[i]);
//         }
//     }
//     return arrResult;
// }


// var a = [NaN, 0, 15, false, -22, 'abc', undefined, 47, null, "1e+1"];

// console.log(toString(a));



// ******************************** TRECI ZADATAK ********************************

/*
function Falsy(str) {
    var res = [];
    var j = 0;
    for (var i = 0; i < str.length; i++) {
        if (!!a[i] === false) {
            continue;
        } else {
            res[j] = a[i];
            j++;
        }
    }
    return res;
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(Falsy(a));
*/

// ******************************** CETVRTI ZADATAK ********************************


// function integer(a) {
//     var res = 0;
//     for (i = 0; i < a.length; i++) {
//         if (!isNaN(parseInt(a[i])) && parseInt(a[i]) === a[i]) {
//             res = res + 1;

//         }
//     }
//     return res;
// }

// var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

// console.log(integer(a));


// ******************************** PETI ZADATAK ********************************


// function float(a) {
//     var res = 0;
//     for (i = 0; i < a.length; i++) {
//         if (!isNaN(parseInt(a[i])) && parseInt(a[i]) !== a[i]) {
//             res = res + 1;
//         }
//     }
//     return res;
// }

// var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

// console.log(float(a));