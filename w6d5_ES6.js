// 1 zadatak


// let capitalize = (...args) => args.map(string => string.charAt(0).toUpperCase() + string.slice(1))


// console.log(capitalize("branko", "hello"))


// 2 zadatak

// let calc = (price) => {

//     const tax = 0.2;
//     return tax * price


// }
// console.log(calc(120));


// 3 zadatak


// let increase = (arr, value = 1) => arr.map(element => element + value)



// console.log(increase([1, 2, 3], 1));


// 4 zadatak 


// let even = arr => arr.filter(element => element % 2 === 0);


// console.log(even([1, 2, 3, 4, 5, 6]))

// 5 zadatak 



// let filterString = arr => arr.filter(element => element.includes("js") || element.includes("JS"));


// console.log(filterString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));


//6 zadatak



// let filterInt = arr => arr.filter(element => Number.isInteger(element));
// console.log(filterInt([1.6, 11.34, 9.23, 7, 3.11, 8]));


// 7 zadatak


// let filterInt = arr => arr.filter(element => Number.isInteger(element) && element.toString().includes("5"))

// console.log(filterInt([23, 11.5, 9, 'abc', 45, 28, 553]));


// 8 zadatak



// let index = arr => arr.reduce((a, e, i) => {

//     if (e > 10) {

//         a.push(i);
//     }
//     return a;

// }, [])


// console.log(index([1.6, 11.34, 29.23, 7, 3.11, 18]))


// 9 zadatak 



// var persons = [

//     {
//         name: "branko",
//         age: 30

//     },
//     {
//         name: "radak",
//         age: 27

//     },
//     {
//         name: "aleksandar",
//         age: 26

//     },
//     {
//         name: "nikola",
//         age: 27

//     }

// ]


// let print = arrOfObj => arrOfObj.filter(element => element.age >= 20).forEach(element => console.log(element.name));



// print(persons)


// let older = arrObj => arrObj.some(element => element.age > 29);



// console.log(older(persons));


// let older = arrObj => arrObj.every(element => element.age > 20);

// console.log(older(persons));