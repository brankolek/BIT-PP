function getData() {
    var valid = true;
    subjectElement = document.querySelector(".add-subject");
    subject = subjectElement.value;
    studentElement = document.querySelector(".add-student-name");
    studentFullName = studentElement.value;
    console.log(studentFullName);

    if (!studentFullName) {
        alert("Niste uneli ime");
        valid = false;
        return valid;
    }
    studentFirstName = studentFullName.split(" ")[0];


    studentFirstName = studentFirstName.substring(0, 1).toUpperCase() + studentFirstName.substring(1);
    studentLastName = studentFullName.split(" ")[1];
    studentLastName = studentLastName.substring(0, 1).toUpperCase() + studentLastName.substring(1);
    gradeElement = document.querySelector(".add-grade");
    grade = gradeElement.value;


    newStudent = new Student(studentFirstName, studentLastName);
    newSubject = new Subject(subject)
    newExam = new Exam(newSubject, newStudent, grade);

}


function validateData(grade) {
    var valid = true;
    if (grade > 10) {
        console.log("radi")
        alert("uneli ste pogresnu ocenu! Ocena mora biti manja od 10");
        valid = false;

    } else if (grade < 5) {
        alert("uneli ste pogresnu ocenu! Ocena mora biti veca od 5")
        valid = false;
    }

    return valid;
}


function addData(newExam) {

    item = document.createElement('div')
    itemName = document.createElement('div')
    itemRight = document.createElement('div')
    itemValue = document.createElement('div')
    itemDelete = document.createElement('div')
    itemButton = document.createElement('button')
    studentNode = document.createTextNode(newExam.student.getStudentData());
    gradeNode = document.createTextNode(newExam.grade);
    buttonX = document.createTextNode('x')
    itemName.appendChild(studentNode);
    itemName.classList.add("item-description");
    itemValue.appendChild(gradeNode);
    itemValue.classList.add("item-value");
    itemButton.classList.add("item-delete-btn")
    itemButton.appendChild(buttonX);
    itemDelete.appendChild(itemButton);
    itemDelete.classList.add("item-delete");
    itemRight.appendChild(itemValue);
    itemRight.appendChild(itemDelete);
    itemRight.classList.add("right");
    itemRight.classList.add("clearfix");
    item.appendChild(itemName);
    item.appendChild(itemRight);
    item.classList.add("item", "clearfix");

}


function updateList() {

    if (newExam.hasPassed()) {

        addData(newExam);

        passedList.appendChild(item);

    } else {

        addData(newExam);

        failedList.appendChild(item);

    }

}



function updateStatistic() {

    if (newExam.hasPassed()) {

        countPass++;
        totalStudents++;

        passedCountElement.textContent = countPass;
        totalStudentsElement.textContent = totalStudents;
        percentageFail = parseInt((countFail / (countFail + countPass)) * 100);
        failedPercentageElement.textContent = percentageFail + " %";

    } else {
        countFail++;
        totalStudents++;

        failedCountElement.textContent = countFail;
        totalStudentsElement.textContent = totalStudents;

        percentageFail = parseInt((countFail / (countFail + countPass)) * 100);

        failedPercentageElement.textContent = percentageFail + " %";

    }

}


addBtn.addEventListener('click', function () {


        getData();

        var valid = validateData(grade);
        if (!valid) {

            return;
        }

        updateList();

        updateStatistic();

    }

)