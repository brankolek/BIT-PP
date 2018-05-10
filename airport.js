(function () {


    function Person(name, surname) {

        this.name = name;
        this.surname = surname;
        this.getData = function () {

            var fullName = this.name + " " + this.surname;
            return fullName

        }


    }


    function Seat(number, category) {
        if (category === undefined) {
            category = "e";

        }

        if (number === undefined) {


            number = parseInt((100 - 10) * Math.random() + 10);

        }
        this.number = number;
        this.category = category.toUpperCase();
        this.getData = function () {

            return this.number + ", " + this.category


        }



    }
    function Passenger(person, seat) {

        this.person = person;
        this.seat = seat;
        this.getData = function () {

            return this.seat.getData() + ", " + this.person.getData()


        }


    }
    function Filght(relation, date) {

        this.relation = relation;
        this.date = new Date(date).toDateString();
        this.passengers = [];
        this.addPassenger = function (passenger) {

            for (var i = 0; i < this.passengers.length; i++) {

                if (passenger.seat.number === this.passengers[i].seat.number || passenger.person.getData() === this.passengers[i].person.getData()) {
                    throw console.error("Putnici imaju isti broj ili ime");


                }
            }
            if (this.passengers.length >= 100) {


                throw console.error("Vise od sto putnika");
            }


            this.passengers.push(passenger);

        }
        this.getData = function () {

            var string = "";
            for (var i = 0; i < this.passengers.length; i++) {

                string += "\t\t" + this.passengers[i].getData() + "\n";
            }

            return this.date + ", " + this.relation + "\n" + string;

        }

    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.flights = [];
        this.addFlight = function (flight) {

            this.flights.push(flight);

        }
        this.getData = function () {
            var counter = 0;
            var string = "";
            for (var i = 0; i < this.flights.length; i++) {
                counter += this.flights[i].passengers.length;
                string += "\t" + this.flights[i].getData() + '\n';

            }

            return "Airport: " + this.name + ", total passangers: " + counter + '\n' + string;
        }
    }


    function createFlight(relation, date) {


        return new Filght(relation, date)
    }
    function createPassenger(name, surname, number, category) {

        var person = new Person(name, surname);
        var seat = new Seat(number, category);

        return new Passenger(person, seat)

    }


    var nikolaTesla = new Airport();

    var firstFlight = createFlight("Belgrad - New York", "Oct 25 2017");
    var secondFlight = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var firstPassenger = createPassenger("John", "Snow", 1, "b");
    var secondPassenger = createPassenger("John", "Snow", 1, "b");
    var thirdPassenger = createPassenger("Daenerys", "Targaryen", 14);
    var fourthPassenger = createPassenger("Tyrion", "Lannister");


    firstFlight.addPassenger(firstPassenger);
    firstFlight.addPassenger(secondPassenger);

    secondFlight.addPassenger(thirdPassenger);
    secondFlight.addPassenger(fourthPassenger);

    nikolaTesla.addFlight(firstFlight);
    nikolaTesla.addFlight(secondFlight);


    console.log(nikolaTesla.getData());











































})();
