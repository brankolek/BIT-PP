"use strict";



(function () {


    var Continent = {

        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU"
    }

    function Country(name, odds, continent) {

        this.name = name;
        this.odds = odds;
        this.continent = continent

    }

    function Person(name, surname, dateOfBirth) {

        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        this.getData = function () {
            var options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return this.name + this.surname + this.dateOfBirth.toLocaleDateString("en-US", options)

        }

    }


    function Player(person, betAmount, country) {


        this.person = person;
        this.betAmount = parseInt(betAmount);
        this.country = country;
        this.getData = function () {

            var dateNow = new Date().getFullYear();
            var year = dateNow - this.person.dateOfBirth.getFullYear();
            return this.country.name + ", " + this.betAmount * this.country.odds + ", " + this.person.name + " " + this.person.surname + ", " + year + " years";
        }

    }

    function Address(country, city, postalCode, street, number) {

        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function () {


            return this.street + this.number + ", " + this.postalCode + this.city + ", " + this.country.name

        }

    }

    function BettingPlace(address) {
        this.address = address;
        this.players = [];
        this.getData = function () {
            var allBets = 0;
            var string = "";
            for (var i = 0; i < this.players.length; i++) {
                var element = this.players[i];
                allBets += element.betAmount;
                string += element.getData() + "\n";
            }


            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", " + "sum of all bets: " + allBets + "\n" + string;
        }
        this.addData = function (player) {
            this.players.push(player);
        }


    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.places = [];
        this.numberOfPlayers = 0;
        this.addData = function (bettingPlace) {

            this.places.push(bettingPlace);
            this.numberOfPlayers += bettingPlace.players.length;
        }
        this.getData = function () {
            var string = "";
            for (var i = 0; i < this.places.length; i++) {

                string += this.places[i].getData() + "\n";


            }
            return this.competition + ", " + this.places.length + " betting places" + ", " + this.numberOfPlayers + "bets" + "\n" + string;
        }

    }


    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }


    function createBettingPlace(address) {
        return new BettingPlace(address);
    }


    var RS = new Country("SR", 0.8, Continent.EUROPE)
    var VT = new Country("VT", 0.6, Continent.ASIA)

    var Mozart = new BettingHouse("WorldCup");


    var brankoLek = new Person("Branko", "Lekovic", "08 / 05 / 1988");
    var vincentino = new Player(brankoLek, "1000", RS);


    var djordjeRad = new Person("Djordje", "Radakovic", "06 / 03 / 1991");
    var radak = new Player(djordjeRad, "999", RS);


    var aleksaJoc = new Person("Aleksandar", "Jocic", "06/29/1992");
    var hellAngel = new Player(aleksaJoc, "700", VT);


    var andjelkaZec = new Person("Andjelka", "Zecevic", "03 /03/ 1983");
    var asistent = new Player(andjelkaZec, "10000", RS);


    var addressBelgrade = new Address("SR", "Beograd", 11000, "Ustanicka", 7);
    var belgrade = new BettingPlace(addressBelgrade)


    var adressKraljevo = new Address("SR", "Kraljevo", 36000, "Cara Lazara", 1389);
    var kraljevo = new BettingPlace(adressKraljevo);



    kraljevo.addData(vincentino);
    kraljevo.addData(asistent);
    belgrade.addData(radak);
    belgrade.addData(hellAngel);

    Mozart.addData(kraljevo);
    Mozart.addData(belgrade);

    console.log(kraljevo.getData());
    console.log(belgrade.getData());
    console.log(Mozart.getData())



























})();