var a = [1, 2, 3, 4, 5];
index = 3;
var newElement = 8;

try {
    if (index > a.length - 1) {
        throw new RangeError("element nije u nizu")
    }
    console.log(a[index]);
    if (typeof newElement !== "number") {
        throw new TypeError("novi element nije broj")
    }
    a.push(newElement);
    console.log(a);

} catch (error) {
    console.log(error.message)

}