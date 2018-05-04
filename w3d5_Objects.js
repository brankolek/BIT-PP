

//***************************************** OBJECTS ************************************

//*****************************************PRVI ZADATAK ********************************
// var coffee = {

//     name: 'coffee Latte',
//     strength: 'mild',
//     flavour: 'sweet',
//     milk: true,
//     sugar: true

// }

//*****************************************DRUGI ZADATAK ********************************

// var movie = {
//     name: 'Shawshank redemption',
//     actorMain: 'Morgan Freeman',
//     otherActor: 'tim robbins',
//     director: 'Frank Darabont',
//     genre: 'drama',
//     popularity: 'undying'
// }


//*****************************************TRECI ZADATAK ********************************



// function ComputerProgram(description, language, git, completed) {

//     this.description = description;
//     this.language = language;
//     this.git = git;
//     this.completed = completed;
//     this.repository = function () {
//         console.log(this.git)
//     };
//     this.js = function () {
//         if (this.language === "JavaScript") {
//             console.log("yes");
//         } else {
//             console.log("no");
//         }
//     };
//     this.finished = function () {
//         if (this.completed) {
//             console.log("It is finished");
//         } else {
//             console.log("It is not finished");
//         }
//     };

//     return this;

// }

// var facebook = new ComputerProgram("Social network", "JavaScript", "brankolek.rs", false);


//*****************************************CETVRTI ZADATAK ********************************



function CookingRecipe(name, typeOfCuisine, complexity, ingredients, preparingTime, instruction) {

    this.name = name;
    this.typeOfCuisine = typeOfCuisine;
    this.complexity = complexity;
    this.ingredients = ingredients;
    this.preparingTime = preparingTime;
    this.instruction = instruction;

    this.listOfIngredients = function () {
        console.log(this.ingredients);
    }
    this.changeCuisine = function () {
        if (typeOfCuisine === 'Italian') {
            this.typeOfCuisine = 'Chinese';
        }
    }
    this.preparation = function () {
        if (this.preparingTime < 15) {
            console.log("less than 15");

        } else {
            console.log("over 15");
        }
    }
    this.delete = function (elementToDelete) {
        var output = [];
        var j = 0;
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i] === elementToDelete) {
                continue;
            } else {
                output[j] = this.ingredients[i];
                j++;
            }
        }
        this.ingredients = output;
        return output;
    }

}

var food = new CookingRecipe('noodles', 'Italian', 2, ['flour', 'eggs', 'Noucmia', 'something'], 14, 'adojgaigoiaioijgiaig');
console.log(food);

food.delete('eggs');
console.log(food);