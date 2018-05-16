//*******************BUILT IN OBJECTS*****************************/



//******************DRUGI ZADATAK *******************************/


// function rev(num) {

//     return parseInt(num.toString().split("").reverse().join(''));


// }

// console.log(rev(12345));


//******************TRECI ZADATAK *******************************/

// function alpha(string) {

//     return string.toLowerCase().split("").sort().join("");
// }

// console.log(alpha("Webmaster"));

//******************CETVRTI ZADATAK *******************************/

// function alphaWord(string) {
//     var a = string.split(" ");
//     for (var i = 0; i < a.length; i++) {

//         a[i] = a[i].split("").sort().join("");

//     }
//     return a.join(" ");

// }


// console.log(alphaWord("Republic of Serbia"));

//******************PETI ZADATAK *******************************/


// function promena(string) {
//     return string.split(" ");
// }

// console.log(promena("John Snow"));

//******************SESTI ZADATAK *******************************/


// function abbr(string) {

//     var a = string.split(" ");
//     a[1] = a[1].substring(0, 1).split("");
//     a[1].push(".");
//     a[1] = a[1].join("");

//     return a.join(" ");
// }

// console.log(abbr("John Snow"));



// *************************sedmi zadatak******************************

// function pad(string, num, side) {
//     var numS = num.toString();
//     var dif = string.length - numS.length;
//     var zeros = string.substring(0, dif);
//     var result = "";
//     if (side === 'r') {

//         result = parseInt(numS + zeros);

//     } else if (side === "l") {


//         result = parseInt(zeros + numS);
//         console.log(typeof result);

//     }

//     return result;
// }


// console.log(pad('0000', 123, 'l'));


// *************************OSmi zadatak******************************

// function cap(string) {

//     var a = string[0].toUpperCase();
//     var b = string.substring(1, string.length);
//     return a.concat(b);



// }

// console.log(cap("js string exercises"));
