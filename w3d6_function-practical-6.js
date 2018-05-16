// *********************** PRVI ZADATAK ************************

// function countVowels(string) {

//     var count = 0;
//     for (i = 0; i < string.length; i++) {

//         switch (string[i]) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }


// var string = "babadeda";
// console.log(countVowels(string));


// *********************** DRUGI ZADATAK ************************




// *********************** TRECI ZADATAK ************************


// function rotate(a, k) {
//     var tmp;

//     for (i = 0; i < a.length - k; i++) {
//         tmp = a[i];
//         a[i] = a[i + k];
//         a[i + k] = tmp;

//     }
//     return a;

// }

// var a = [1, 2, 3, 4, 5, 6];

// console.log(rotate(a, 2));



// *********************** CETVRTI ZADATAK (ZOVE FUNCKIJU IZ TRECEG)************************


// function numberToDigits(num) {

//     var a = [];
//     var dec = 10;
//     var i = 0;

//     while (num >= 10) {

//         a[i] = num % dec;
//         num = parseInt(num / dec)
//         i++;

//     }
//     a[i] = num;

//     rotate(a, a.length - 1);
//     return a;

// }

// var num = 652;

// console.log(numberToDigits(num));




// *********************** PETI ZADATAK************************

// var a = "";
// var b = " ";
// for (i = 1; i <= 12; i++) {

//     for (j = 1; j <= 12; j++) {

//         if (i * j < 10) {
//             b = "  ";
//         } else if (j >= 9 && i < 12) {

//             b = "  ";

//         }
//         a += " " + i * j + b;
//         b = " ";


//     }

//     console.log(a);
//     a = '';
// }


// ******************************* SESTI ZADATAK **************************************



// function CelToFar(temp) {

//     var far = 1.8 * temp + 32;

//     return far;

// }


// ******************************* SEDMI ZADATAK **************************************

// function maxNum(a) {
//     var b = [];
//     var j = 0;
//     var max = a[0];
//     for (i = 0; i < a.length; i++) {
//         if (!isFinite(a[i]) || typeof a[i] === "boolean") {
//             continue;
//         } else {
//             b[j] = a[i]
//             if (b[j] > max) {
//                 max = b[j];
//             }
//             j++;

//         }
//     }
//     return max;
// }


// var a = [12, 5, NaN, Infinity, "false", 25, true];

// console.log(maxNum(a))

// ******************************* DESETI  ZADATAK **************************************


// function mostFrequent(a) {
//     var element = a[0];
//     var freq = 1;

//     for (i = 0; i < a.length; i++) {
//         var count = 0;
//         for (j = i + 1; j < a.length; j++) {

//             if (a[i] === a[j]) {
//                 count++;
//             }

//         }

//         if (count > freq) {

//             freq = count;
//             element = a[i];

//         }
//     }

//     return element;
// }


// var a = [1, 2, 3, 4, 5, 6, 6, 6, 6, 5, 5, 2, 2, 2, 2, 2, 2, 2];
// console.log(mostFrequent(a));

// ******************************* DVANESTI ZADATAK **************************************

// function average() {
//     var average = 0;
//     for (i = 0; i < arguments.length; i++) {
//         average += (arguments[i] / arguments.length);
//     }
//     return average;

// }


// console.log(average(5, 10, 15));



// ******************************* TRINESTI ZADATAK **************************************

// function greater() {

//     var b = [];
//     j = 0;
//     var average = 0;
//     for (i = 0; i < arguments.length; i++) {


//         average += (arguments[i] / arguments.length);

//     }

//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > average) {

//             b[j] = arguments[i];
//             j++

//         }
//     }
//     return b;
// }

// console.log(greater(5, 10, 15));


var human = {

    name: "Uros",
    Surname: "Lekovic",
    age: 26,
    adresa: {

        ulica: "Cankareva",
        broj: 10
    },
    birthday: function () {

        var result = 2018 - this.age;
        return result;


    }


}

console.log(human.birthday());

