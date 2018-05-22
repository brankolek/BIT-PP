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