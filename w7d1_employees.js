class Person {
    constructor(name, surname) {

        this.name = name;
        this.surname = surname;
    }

    getFullname() {

        return `${this.name} ${this.surname}`
    }

}

class Employee extends Person {

    constructor(name, surname, job, salary) {

        super(name, surname);
        this.job = job;
        this.salary = salary;

    }

    getData() {

        return `${super.getFullname() } ${this.salary}`;
    }

    getSalary() {

        return this.salary;
    }

    increaseSalary() {

        return this.salary *= 1.1;
    }
}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;

    }
    getSpecialization() {


        console.log(this.specialization);
    }

}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {

        super(name, surname, job, salary);
        this.department = department;

    }

    getDepartment() {
        console.log(this.department);

    }
    changeDepartment(newDepartment) {

        this.department = newDepartment;
    }

}


//Kreriranje objekata developer
var branko = new Developer("Branko", "Lekovic", "JS-DEV", 100000, "REACT");

var radak = new Manager("Djordje", "Radakovic", "Bussines", 1000000, "GeneralManager");



console.log(branko);
branko.getSpecialization();
console.log(branko.getData());
console.log(branko.getSalary());
console.log(branko.increaseSalary());
console.log(branko.getFullname());



console.log(radak)
radak.getDepartment();
radak.changeDepartment("GameManager");
radak.getDepartment();
console.log(radak.getData());
console.log(radak.getSalary());
console.log(radak.increaseSalary());
console.log(radak.getFullname());