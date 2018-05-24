var mainModule = (function(UImodule,dataModule){


    function addCreateMovieListener(){
        
        let createMovieButton =$(UImodule.UISelectors.createMovieButtonSelector)

        createMovieButton.on("click", function(){
         
            let movieData = UImodule.getMovieData()
            console.log(movieData)
            let newMovie =  dataModule.createMovie(movieData.title,movieData.genre,movieData.length);
            UImodule.renderMovie(newMovie);

        })
    }

    function addCreateProgramListener(){
        
        let createProgramButton =$(UImodule.UISelectors.createProgramButtonSelector)

        createProgramButton.on("click", function(){
         
            let programData = UImodule.getProgramData()
            console.log(programData)
            let newProgram =  dataModule.createProgram(programData.date)
            UImodule.renderProgram(newProgram);

        })
    }


























return {

    init: function(){

        console.log("Init...")
        addCreateMovieListener();
        addCreateProgramListener();

    }
}



})(UImodule,dataModule);


mainModule.init();