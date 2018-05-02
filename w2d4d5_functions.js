// function sum(a, b) {

//     var result;
//     result = a + b;

//     return result;

// }

// var s;
// s = sum(2, 3);
// console.log(s);



// function sum() {

//     var result = 0;

//     for (var i = 0; i < arguments.length; i++) {

//         result = result + arguments[i];

//     }
//     return result;

// }

// var s;
// s = sum(2, 3, 7, 4, 55);
// console.log(s);


// ************************* PRVI ZADATAK ******************

// function isString(s) {

//     if (typeof s === "string") {

//         return true;
//     } else {

//         return false;
//     }

// }

// var word = 7;

// var result = isString(word);

// console.log(result);


//************************ DRUGI  ZADATAK ************************************



// function isBlank(s) {

//     if (s) {

//         return false;
//     } else {

//         return true;
//     }

// }

// console.log(isBlank(""));
"use strict";

//************************** TRECI ZADATAK *******************************


// function con(s, n) {

//     if (arguments[1] === undefined) {
//         n = 1;
//     }

//     var result = "";

//     for (var i = 1; i <= n; i++) {

//         result = result + s;

//     }

//     return result;
// }


// console.log(con("stefan"));


//************************** CETVRTI ZADATAK *******************************


// deklaracija funkcije 


// function letter(s, l) {
//     var n = 0;

//     for (var i = 0; i < s.length; i++) {
//         if (l === s[i]) {

//             n = n + 1;

//         }

//     }

//     return n;

// }

// glavni program 


// var a = "stefan stefanovic";
// var slovo = "s";
// var result = letter(a, slovo);



// console.log(result);



// ********************************* PETI ZADATAK ***********************



// function first(s, l) {
//     var n = -1;
//     for (i = 0; i < s.length; i++) {

//         if (l === s[i]) {

//             n = i + 1;
//             break;
//         }

//     }

//     return n;

// }


// //program

// var a = "stefan stefanovic";
// var slovo = "k";
// var result = first(a, slovo);

// console.log(result);


// ************************ SESTI ZADATAK ***********************

// function last(s, l) {
//     var n = -1;
//     for (i = s.length; i >= 0; i--) {

//         if (l === s[i]) {

//             n = i + 1;
//             break;
//         }

//     }

//     return n;

// }


// //program

// var a = "stefan stefanovic";
// var slovo = "k";
// var result = last(a, slovo);

// console.log(result);



// ************************ SEDMI ZADATAK ***********************


// function strToArr(inputString) {
//     var outputArray = [];

//     for (var i = 0; i < inputString.length; i++) {

//         if (inputString[i] === " ") {

//             outputArray[i] = null;
//         } else {

//             outputArray[i] = inputString[i];

//         }

//     }

//     return outputArray;
// }

// var result = strToArr("My random string");

// console.log(result);


//*************** OSMI ZADATAK ***********************


// function isPrime(n) {
//     var index = true;
//     var s = "nije dobar broj"

//     if (n > 1) {

//         for (i = 2; i <= n - 1; i++) {

//             if (n % i === 0) {
//                 index = false;
//                 break;
//             }
//         }

//         return index;


//     } else {

//         return s;
//     }

// }


// console.log(isPrime(1));


//*************** DEVETI ZADATAK ***********************


// function Separator(s, l) {

//     var news = "";

//     if (arguments[1] === undefined) {

//         l = "-";
//     }

//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === " ") {

//             news = news + l;

//         } else {

//             news = news + s[i];
//         }


//     }


//     return news;


// }


// console.log(Separator("branko leko vic"));