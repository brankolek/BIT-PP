var a = [1, 8, 11, 4, 17]
try {

    if (a.length >= 4) {
        throw new RangeError("Niz je popunjen!")
    };

    //a.push(13);


} catch (e) {
    console.log("Range error");
    console.log(e.message);

    //var visak = a.length - 5;

    //for (var i = 0; i < visak; i++) {
    // a.pop();



} finally {
    console.log('sve ok')
    console.log(a);
}