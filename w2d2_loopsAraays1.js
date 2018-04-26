

// ********************************************************** PRVI ZADATAK **********************************************************

// var e = 7;
// var a = [5, -4.2, 3, 7];
// var ind = false;


// for (i = 0; i < a.length; i++) {

//     if (a[i] === e) {

//         ind = true;
//     }
// }

// if (ind === false) {

//     console.log("NO");
// } else {


//     console.log("Yes");
// }


// ******************************************** DRUGI ZADATAK *************************
/*
var a = [-3, 11, 5, 3.4, -8];
 
for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;
    }
}
console.log(a);
 
*/

//********************************** TRECI ZADATAK ******************************* */
/*
 
var a = [-5, -14, 2, -1, -14, -14]
 
var min = a[0];
var index = 0;
 
 
 
for (i = 0; i < a.length; i++) {
 
    if (a[i] < min) {
 
        min = a[i];
        index = i;
    }
 
}
 
 
console.log(min);
console.log(index);
*/



// ***************************** CETVRTI ZADATAK ******************************



// var a = [-15, -15, 2, -7, -1,]

// var min = a[0];
// var min2 = a[1];


// for (i = 1; i < a.length; i++) {

//     if (a[i] < min) {

//         min2 = min;
//         min = a[i];

//     } else if (a[i] < min2) {

//         min2 = a[i];
//     }

// }

// console.log(min);
// console.log(min2);




// ********************************** PETI ZADATAK ********************


// var a = [3, 11, -5, -3, 2]

// var sum = 0;

// for (i = 0; i < a.length; i++) {


//     if (a[i] > 0) {

//         sum = sum + a[i];

//     }

// }


// console.log(sum);



// ********************************** SESTI ZADATAK ********************



// var a = [2, -4, 3, 2, 4, 2];

// var ind = true;

// for (i = 0, j = a.length - 1; i <= j; i++ , j--) {

//     if (a[i] !== a[j]) {
//         ind = false;
//         break;
//     }

// }

// if (ind === true) {

//     console.log("simetrican")
// } else {
//     console.log("Nije simetrican")
// }



// ********************************** SEDMI ZADATAK ********************


// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];
// var c = [];


// for (i = 0, j = 0; i < a.length; i++ , j += 2) {

//     c[j] = a[i];
//     c[j + 1] = b[i];

// }

// console.log(c)



// ********************************** OSMI ZADATAK ********************

// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9]
// var c = [];

// for (i = 0; i < a.length; i++) {
//     c[i] = a[i];
// }
// for (i = 0, j = a.length; i < b.length; i++ , j++) {
//     c[j] = b[i];
// }



// console.log(c);



//********************** DEVETI ZADATAK ************************

// var a = [4, 6, 2, 8, 2, 2]
// var e = 2;
// var b = [];
// var j = 0;


// for (i = 0; i < a.length; i++) {

//     if (e !== a[i]) {

//         b[j] = a[i];
//         j++;

//     }

// }

// console.log(b);