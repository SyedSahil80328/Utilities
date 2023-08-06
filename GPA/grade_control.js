function inc_Grade(arg) {
    grade = document.getElementById(arg);
    r = grade.textContent;

    if (r === "A+") {
        grade.classList.add('grade_O');
        grade.classList.remove('grade_Ap');
        r = "O";
    }
    else if (r === "A") {
        grade.classList.add('grade_Ap');
        grade.classList.remove('grade_A');
        r = "A+";
    }
    else if (r === "B+") {
        grade.classList.add('grade_A');
        grade.classList.remove('grade_Bp');
        r = "A";
    }
    else if (r === "B") {
        grade.classList.add('grade_Bp');
        grade.classList.remove('grade_B');
        r = "B+";
    }
    else if (r === "C") {
        grade.classList.add('grade_B');
        grade.classList.remove('grade_C');
        r = "B";
    }
    else if (r === "RA") {
        grade.classList.add('grade_C');
        grade.classList.remove('grade_RA');
        r = "C";
    }
    else if (r === "O") {
        grade.classList.remove('grade_O');
        r = "RA";
        grade.classList.add('grade_RA');
    }

    document.getElementById(arg).textContent = r;
}

function dec_Grade(arg) {
    grade = document.getElementById(arg);
    r = grade.textContent;

    if (r === "O") {
        r = "A+";
        grade.classList.add('grade_Ap');
   }
   else if (r === "A+") {
        r = "A";
        grade.classList.add('grade_A');
   }
   else if (r === "A") {
        r = "B+";
        grade.classList.add('grade_Bp');
   }
   else if (r === "B+") {
        r = "B";
        grade.classList.add('grade_B');
   }
   else if (r === "B") {
        r = "C";
        grade.classList.add('grade_C');
   }
   else if (r === "C") {
        r = "RA";
        grade.classList.add('grade_RA');
   }
   else if (r === "RA") {
        r = "O";
        grade.classList.remove('grade_RA');
        grade.classList.remove('grade_C');
        grade.classList.remove('grade_B');
        grade.classList.remove('grade_Bp');
        grade.classList.remove('grade_A');
        grade.classList.remove('grade_Ap');
        grade.classList.add('grade_O');
   }

    document.getElementById(arg).textContent = r;
}

function inc_Sem () {
    r = document.getElementById('Semester').textContent * 1;
    r = (r != 8)?r+1:1;
    document.getElementById('Semester').textContent = r;
}

function dec_Sem () {
    r = document.getElementById('Semester').textContent * 1;
    r = (r != 1)?r-1:8;
    document.getElementById('Semester').textContent = r;
}