//********************FUNCTIONS LITERAL NOTATION *******************



// ****************** SORTIRANJE NIZA *********************

// FUNKCIJA MENJA ORIGINALNI NIZ!!!!!!!

// var sortArray = function (a) {
//     var i;
//     var j;

//     for (i = 0; i < a.length; i++) {

//         var minIndex = i;
//         for (j = i + 1; j < a.length; j++) {
//             if (a[j] < a[minIndex]) {
//                 minIndex = j;
//                 // var tmp = a[j];
//                 // a[j] = a[i];
//                 // a[i] = tmp;
//             }
//         }
//         if (i != minIndex) {
//             var tmp = a[i];
//             a[i] = a[minIndex];
//             a[minIndex] = tmp;
//         }

//     }
//     return a;
// }

// var a = [8, 11, 6, 9, 4];
// var result;

// result = sortArray(a);
// console.log(result);



// ********************************* PRVI ZADATAK *****************************
// var minMax = function (a) {

//     var indexMin = 0;
//     var indexMax = 0;
//     var max = a[0];
//     var min = a[0];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] < min) {
//             min = a[i]
//             indexMin = i;
//         } else if (a[i] >= max) {
//             max = a[i];
//             indexMax = i;
//         }
//     }

//     a[indexMin] = max;
//     a[indexMax] = min;


// }


// var a = [3, 500, 12, 500, 53, 414, 1, 19];
// minMax(a);

// console.log(a)

// ********************************* DRUGI ZADATAK *****************************

// var newArray = function (a) {

//     for (i = 0; i < a.length; i++) {
//         if (a[i] === 0) {
//             a[i] = 20;

//         } else {

//             a[i] = a[i] / 2 + 5;

//         }

//     }



// }

// var a = [3, 500, 0, 149, 53, 414, 1, 19];
// newArray(a);
// console.log(a);


// ******************************* TRECI ZADATAK ********************

// var student = function (names, points) {

//     for (i = 0; i < names.length; i++) {

//         if (points[i] >= 91) {
//             console.log(names[i] + " acquired " + points[i] + " points and earned 10.");
//         } else if (points[i] >= 81) {
//             console.log(names[i] + " acquired " + points[i] + " points and earned 9.");
//         } else if (points[i] >= 71) {
//             console.log(names[i] + " acquired " + points[i] + " points and earned 8.");
//         } else if (points[i] >= 61) {
//             console.log(names[i] + " acquired " + points[i] + " points and earned 7.");
//         } else if (points[i] >= 51) {
//             console.log(names[i] + " acquired " + points[i] + " points and earned 6.");
//         } else {
//             console.log(names[i] + " acquired " + points[i] + " and failed to complete exam");

//         }
//     }

// }

// var names = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
// var points = [50, 39, 63, 72, 99, 51, 83, 59];

// student(names, points);


// ******************************* PETI ZADATAK ********************


// var sortDes = function (a) {

//     for (i = 0; i < a.length; i++) {
//         for (j = i + 1; j < a.length; j++) {
//             if (a[j] > a[i]) {
//                 var temp;
//                 temp = a[j];
//                 a[j] = a[i];
//                 a[i] = temp;
//             }
//         }
//     }
// }



// sortDes(a);
// console.log(a)

// console.log(x);
// var x = 10;

