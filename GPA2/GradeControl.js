function incGrade(arg) {
    grade = document.getElementById(arg);
    r = grade.textContent;

    if (r === "A+") {
        grade.classList.add('grade-O');
        grade.classList.remove('grade-Ap');
        r = "O";
    }
    else if (r === "A") {
        grade.classList.add('grade-Ap');
        grade.classList.remove('grade-A');
        r = "A+";
    }
    else if (r === "B+") {
        grade.classList.add('grade-A');
        grade.classList.remove('grade-Bp');
        r = "A";
    }
    else if (r === "B") {
        grade.classList.add('grade-Bp');
        grade.classList.remove('grade-B');
        r = "B+";
    }
    else if (r === "C") {
        grade.classList.add('grade-B');
        grade.classList.remove('grade-C');
        r = "B";
    }
    else if (r === "RA") {
        grade.classList.add('grade-C');
        grade.classList.remove('grade-RA');
        r = "C";
    }
    else if (r === "O") {
        grade.classList.remove('grade-O');
        r = "RA";
        grade.classList.add('grade-RA');
    }

    document.getElementById(arg).textContent = r;
}

function decGrade(arg) {
    grade = document.getElementById(arg);
    r = grade.textContent;

    if (r === "O") {
        r = "A+";
        grade.classList.add('grade-Ap');
   }
   else if (r === "A+") {
        r = "A";
        grade.classList.add('grade-A');
   }
   else if (r === "A") {
        r = "B+";
        grade.classList.add('grade-Bp');
   }
   else if (r === "B+") {
        r = "B";
        grade.classList.add('grade-B');
   }
   else if (r === "B") {
        r = "C";
        grade.classList.add('grade-C');
   }
   else if (r === "C") {
        r = "RA";
        grade.classList.add('grade-RA');
   }
   else if (r === "RA") {
        r = "O";
        grade.classList.remove('grade-RA');
        grade.classList.remove('grade-C');
        grade.classList.remove('grade-B');
        grade.classList.remove('grade-Bp');
        grade.classList.remove('grade-A');
        grade.classList.remove('grade-Ap');
        grade.classList.add('grade-O');
   }

    document.getElementById(arg).textContent = r;
}

function incSem () {
    r = document.getElementById('semester').textContent * 1;
    r = (r != 8)?r+1:1;
    document.getElementById('semester').textContent = r;
}

function decSem () {
    r = document.getElementById('semester').textContent * 1;
    r = (r != 1)?r-1:8;
    document.getElementById('semester').textContent = r;
}