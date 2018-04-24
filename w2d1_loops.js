// FOR LOOPS 


// **************** PRVI ZADATAK *******************


// for (var num = 0; num <= 15; num++) {

//     if (num === 0) {

//         console.log("Number is zero")

//     } else if (num % 2 === 0) {

//         console.log("Number " + num + " is even")

//     } else {

//         console.log("Number " + num + " is odd")
//     }
// }



// *********************** DRUGI ZADATAK *********************


// var sum = 0;

// for (var num = 0; num <= 1000; num++) {

//     if (num % 3 === 0 && num % 5 === 0) {


//         sum += num;


//     }
// }

// console.log("Sum of numbers is " + sum);


// ************************ TRECI ZADATAK ***********************

/* var niz = [1, 2, 3, 4, 5];

var sum = 0;
var prod = 1;

for (var i = 0; i < niz.length; i++) {

    sum += niz[i];
    prod *= niz[i];


}

console.log(sum);
console.log(prod);

*/

// *************************** CETVRTI ZADATAK *********************************

/* var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var total = '';

for (var i = 0; i < x.length; i++) {
   total = total + x[i];
}

for (var i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
        total += x[i];
    }
}
console.log(total);
*/

// ************************* PETI ZADATAK **************************************


/*
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (i = 0; i < a.length; i++) {


    for (j = 0; j < a[i].length; j++) {

        console.log(a[i][j]);
    }

}
*/

//***************************** SESTI ZADATAK ************************
/* var sum = 0;

for (var i = 1; i < 20; i++) {
    sum = sum + i * i;
}
console.log(sum); 
*/

//***************************** SEDMI ZADATAK *************************

// var grade = [80, 77, 88, 95, 68]
// var average = 0;

// for (i = 0; i < grade.length; i++) {
//     average = (average + grade[i]);
// }
// average = average / grade.length
// console.log(average);
// if (average < 60) {
//     console.log("F");
// }

// else if (average < 70) {
//     console.log("D");
// }
// else if (average < 80) {
//     console.log("C");
// }
// else if (average < 90) {
//     console.log("B");
// }
// else {
//     console.log("A");

// }



// }

// ***********************************OSMI ZAD ***********************************

// for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log("fizz");
//     }
//     else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log("buzz");

//     }
//     else if (i % 5 === 0 && i % 3 === 0) {
//         console.log("fizzbuzz");
//     }
//     else {
//         console.log(i);
//     }
// }



// ********************* DODATNI ZADATAK ************

var a = [1, 2, 6, 5, 11]
var b = [];
var j;
var i;
var temp;


// for (i = a.length - 1, j = 0; i >= 0; i-- , j++) {

for (i = 0, j = a.length - 1; i < j; i++ , j--) {

    //prva iteracija: b[0] = a[4], i=3, j=1;

    //druga iteracija: b[1] = a[3], i=2, j=2;

    //treca iteracija: b[2] = a[2], i=1, j=3;

    //cetvrta iteracija: b[3] = a[1], i=0, j=4;

    //peta iteracija: b[4] = a[0], i=-1, j=5; IZLAZAK IZ PETLJE ! 


    // b[j] = a[i];

    temp = a[i];
    a[i] = a[j];
    a[j] = temp;

}
console.log(a)