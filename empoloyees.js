(function () {




    // PERSON
    function Person(name, surname) {

        this.name = name;
        this.surname = surname;

    }
    // PERSON PROTOTIP 
    Person.prototype.getFullName = function () {
        return this.name + " " +
            this.surname;
    }











    // EMPLOYEE

    function Employee(name, surname, job, salary) {
        //koristi se call metoda Fje Person, koja ima iste argumente kao person, ali i dodatni this koji u ovom slucaju pokazuje na objekat Employee 
        //this = {} 
        Person.call(this, name, surname);

        this.job = job;
        this.salary = salary;

        // this.__proto__


    }

    //Employee.prototype




    // STVARA VEZU IZMEDJU EMPLOYEE i PERSON, i to preko Employee.prototype
    Employee.prototype = Object.create(Person.prototype)
    Employee.prototype.constructor = Employee;
    // Employee.prototype.__proto__ = Person.prototype;


    //Employee.prototype metode 
    Employee.prototype.getData = function () {
        var fullName = Object.getPrototypeOf(Employee.prototype).getFullName.call(this)
        return fullName + " " + this.salary;

    }

    Employee.prototype.getSalary = function () {
        return this.salary;
    }
    Employee.prototype.increaseSalary = function () {
        this.salary *= 1.1;
    }








    // DEVELOPER

    function Developer(name, surname, job, salary, specialization) {


        this.specialization = specialization;
        // Metoda fje Employee koja radi isto sto i employee ali upisuje sve u Developer
        Employee.call(this, name, surname, job, salary);


    }
    //VEZA IZMEDJU DEVELOPER I EMPLOYEE,i to preko developer.prototype, samim tim se stvara veza i izmedju Developer i Person preko Employee.prototype

    Developer.prototype = Object.create(Employee.prototype)
    Developer.prototype.constructor = Developer;

    //Developer.prototype metode
    Developer.prototype.getSpecialization = function () {

        console.log(this.specialization);
    }







    // MANAGER
    function Manager(name, surname, job, salary, department) {

        this.department = department;
        // Metoda fje Employee koja radi isto sto i employee ali upisuje sve u Developer
        Employee.call(this, name, surname, job, salary);

    }

    // Veza izmedju Manager i Employee, samim tim i izmedju Manager i Person
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;


    //Manager.prototype metode
    Manager.prototype.getDepartment = function () {
        console.log(this.department);
    }

    Manager.prototype.changeDepartment = function (newDepartment) {

        this.department = newDepartment;

    }







    //Kreriranje objekata developer
    var branko = new Developer("Branko", "Lekovic", "JS-DEV", 100000, "REACT");

    var radak = new Manager("Djordje", "Radakovic", "Bussines", 1000000, "GeneralManager");



    //Pristup svim metodama objekata, branko kao i njegovim precima !
    // console.log(branko);
    // branko.getSpecialization();
    // console.log(branko.getData());
    // console.log(branko.getSalary());
    // console.log(branko.increaseSalary());
    // console.log(branko.getFullName());



    console.log(radak)
    radak.getDepartment();
    radak.changeDepartment("GameManager");
    radak.getDepartment();
    console.log(radak.getData());
    console.log(radak.getSalary());
    console.log(radak.increaseSalary());
    console.log(radak.getFullName());
})();