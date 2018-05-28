class Person {
    constructor(name, surname) {

        this.name = name;
        this.surname = surname;
    }

    printPersonData() {

        console.log(`${this.name} ${this.surname}`)
    }

}


let branko = new Person("branko", "lekovic")

branko.printPersonData()


class Programer extends Person {

    constructor(name, surname, ...languages) {

        super(name, surname);
        this.languages = languages;

    }

    printProgramerData() {



        console.log(`${this.name}  ${this.surname} knows: ${this.languages}`);

    }

    learnedNewLanguage(name) {
        this.languages.push(name)

    }
}


let baki = new Programer("branko", "lekovic", "C", "JAVA");


baki.printProgramerData();

baki.learnedNewLanguage("JS");

baki.printProgramerData();