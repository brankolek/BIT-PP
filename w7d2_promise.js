// 0 ZADATAK

// var promise = new Promise((resolve, rejected) => {



//     var time = new Date()

//     resolve(time)
// })


// promise.then((time) => {


//     console.log(time);

// })


// PRVI ZADATAK



// for (var i = 0; i < 100; i++) {

//     var promise = new Promise((resolve, rejected) => {
//         var id = i;

//         var random = Math.random() * 500
//         setTimeout(() => {
//             resolve(id)
//         }, random)



//     })

//     promise.then((id) => {


//         console.log(id);

//     })

// }


// DRUGI ZADATAK

// var resolvedPromisesArray = [];

for (var i = 0; i < 100; i++) {

    var promise = new Promise((resolve, rejected) => {
        var id = i;

        var random = Math.random() * 500
        setTimeout(() => {
            resolve(id)
        }, random)



    })

    //     promise.then((id) => {
    //         //console.log(id)
    //     })



    //     resolvedPromisesArray.push(promise)


    // }

    // var p = Promise.race(resolvedPromisesArray).then((x) => {
    //     console.log(x)
    // });


    //TRECI ZADTAK


    var resolvedPromisesArray = [];

    for (var i = 0; i < 100; i++) {

        var promise = new Promise((resolve, rejected) => {
            var id = i;

            var random = Math.random() * 500
            setTimeout(() => {
                resolve(id)
            }, random)



        })

        promise.then((id) => {
            //console.log(id)
        })



        resolvedPromisesArray.push(promise)


    }

    var p = Promise.all(resolvedPromisesArray).then(() => {
        console.log("completed")
    });