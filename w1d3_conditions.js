// var speed = 66;
// var speed_limit_up = 120;
// var speed_limit_down = 60;


// if (speed >= speed_limit_down && speed <= speed_limit_up) {
//     console.log("Perfect!")
// } else {
//     console.log("Ooooo...")
// }
// console.log(speed);

//1

// var a = 5;
// var b = 6;

// if (a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// }

//2

// var num = 8;


// if (num % 2 === 0) {
//     console.log("THIS IS EVEN NUMBER")
// } else {

//     console.log("THIS IS ODD NUMBER")
// }


//3

// var num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("number " + num + " is divisible with 3 and 5")
// }


//4

// var num1 = 3;
// var num2 = -7;
// var num3 = 2;


// if (num1 * num2 * num3 > 0) {
//     console.log("The sign is +")
// } else {
//     console.log("The sign is -")
// }


//5


// var checkNumber = 7;

// if (typeof checkNumber === "number") {
//     if (checkNumber % 2 === 0) {
//         console.log(checkNumber / 2)
//     }
//     else {

//         console.log("X")
//     }

// }


//6

// var num1 = -5;
// var num2 = -2;
// var num3 = 6;
// var num4 = 0;
// var num5 = -1;

// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log(num1)
// } else if
// (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     console.log(num2)
// } else if
// (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     console.log(num3)
// } else if
// (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     console.log(num4)
// } else {

//     console.log(num5)
// }



//7

/*var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c && b > c) {
    console.log(a, b, c)
}

if (a > b && a > c && c > b) {
    console.log(a, c, b)
}
if (b > a && b > c && a > c) {
    console.log(b, a, c)
}
if (b > a && b > c && c > a) {
    console.log(b, c, a)
}
if (c > a && c > b && a > b) {
    console.log(c, a, b)
}
if (c > a && c > b && b > a) {
    console.log(c, b, a)
}
*/


// **************** TERNARNI OPERATOR *************************


// Prvi zadatak

// var num1 = 10;
// var num2 = -2;
// var num3 = 6;
// var num4 = 0;
// var num5 = 25;


// var result;


// result = (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) ? num1 : (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 ? num2 : (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 ? num3 : (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 ? num4 : num5)));

// console.log(result);



// // Drugi zadatak

// var a = 3;

// a % 2 === 0 ? console.log("even") : console.log("odd")

// //stari nacin sa if-else
// if (a % 2 === 0) {
//     colnsole.log("even")

// }
// else{
//     console.log("odd")
// }


// var a = 15
// var result;

// a % 3 === 0 && a % 5 === 0 ? console.log(result) : console.log("nije")