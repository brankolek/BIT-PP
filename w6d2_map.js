//PRVI NACIN

// function map(arrIn, f) {
//     var arrOut = [];
//     for (var i = 0; i < arrIn.length; i++) {

//         arrOut[i] = f(arrIn[i])

//     }
//     return arrOut;

// }


// var arrIn = [1, 2, 3, 4, 5];

// function double(x) {
//     return 2 * x;
// }

// var arr = map(arrIn, double);

// console.log(arr);






//DRUGI NACIN


// function map(f) {
//     var arrOut = [];
//     for (var i = 0; i < this.length; i++) {

//         arrOut[i] = f(this[i])

//     }
//     return arrOut;

// }

// Array.prototype.ourmap = map;

// var arrIn = [1, 2, 3, 4, 5];

// function double(x) {
//     return 2 * x;
// }




// console.log(arrIn.ourmap(double))


FILTER


function filter(f) {
    var arrOut = [];
    var j = 0;
    for (var i = 0; i < this.length; i++) {

        if (f(this[i])) {
            arrOut[j] = this[i];
            j++;
        } else {
            continue;
        }
    }
    return arrOut;

}

Array.prototype.ourfilter = filter;

var arrIn = [1, 2, 3, 4, 5];

function greater(x) {
    return x > 2;
}


console.log(arrIn.ourfilter(greater))

//SOME


function some(f) {

    for (var i = 0; i < this.length; i++) {

        if (f(this[i])) {
            return true;
            break;

        } else if (i === this.length - 1) {


            return false;
        }


    }


}

Array.prototype.ourSome = some;

var arrIn = [1, 2, 3, 4, 5];

function greater(x) {
    return x > 10;
}


console.log(arrIn.ourSome(greater))