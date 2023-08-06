function set_divelements (codes) {
    i = 0;
    printer = "<div class='container'>";
    while (i < codes.length) {
        printer = printer + "<div class='element'>" + subjects[codes[i]][1] + "<br><p class='grade_style grade_O' id='" + codes[i] + "'>O</p>";
        printer = printer + "<button onclick='inc_Grade(\"" + codes[i] + "\");' class='up_unclicked'><i class='fas fa-arrow-up'></i></button>";
        printer = printer + "<button onclick='dec_Grade(\"" + codes[i++] + "\");' class='down_unclicked'><i class='fas fa-arrow-down'></i></button></div>";
        if (! (i%3))
            printer += "</div><div class='container'>";
    }
    printer += "</div>";
    return printer;
}

async function get_selections(semester) {
    if (semester == 3 || semester == 4) {
        additional = semester3;
        printit = "<h2>OPEN ELECTIVES</h2>";
        for (i=0 ; i< OEs.length ; i++){
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist1'><span class='checkmark'></span> " + subjects[OEs[i]][1] + "</label><br><br>";
        }

        if (semester == 4) {
            additional = semester4;
            printit += "<br><h2>MATHEMATICS SOFTCORE</h2>";
            for (i=0 ; i< MSCs.length ; i++) {
                printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist2'><span class='checkmark'></span> " + subjects[MSCs[i]][1] + "</label><br><br>";
            }
        }   
    }

    if (semester == 5) {
        additional = semester5;
        printit = "<h2>MATHEMATICS SOFTCORE</h2>";
        for (i=0 ; i< MSCs.length ; i++){
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist2'><span class='checkmark'></span> " + subjects[MSCs[i]][1] + "</label><br><br>";
        }
        printit += "<br><h2>PROFESSIONAL SOFTCORE</h2>";
        for (i=0 ; i< PSCs.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist3'><span class='checkmark'></span> " + subjects[PSCs[i]][1] + "</label><br><br>";
        }
    }

    if (semester == 6) {
        additional = semester6;
        printit = "<h2>PROFESSIONAL SOFTCORE</h2>";
        for (i=0 ; i< PSCs.length ; i++){
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist3'><span class='checkmark'></span> " + subjects[PSCs[i]][1] + "</label><br><br>";
        }
        printit += "<br><h2>PROFESSIONAL ELECTIVES 01</h2>";
        for (i=0 ; i< PE01s.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist4'><span class='checkmark'></span> " + subjects[PE01s[i]][1] + "</label><br><br>";
        }
    }

    if (semester == 7) {
        additional = semester7;
        printit += "<br><h2>PROFESSIONAL ELECTIVES 02</h2>";
        for (i=0 ; i< PE02s.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist5'><span class='checkmark'></span> " + subjects[PE02s[i]][1] + "</label><br><br>";
        }
        printit += "<br><h2>PROFESSIONAL ELECTIVES 03</h2>";
        for (i=0 ; i< PE03s.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist6'><span class='checkmark'></span> " + subjects[PE03s[i]][1] + "</label><br><br>";
        }
        printit += "<br><h2>PROFESSIONAL ELECTIVES 04</h2>";
        for (i=0 ; i< PE04s.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist7'><span class='checkmark'></span> " + subjects[PE04s[i]][1] + "</label><br><br>";
        }
        printit += "<br><h2>PROFESSIONAL ELECTIVES 05</h2>";
        for (i=0 ; i< PE05s.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist8'><span class='checkmark'></span> " + subjects[PE05s[i]][1] + "</label><br><br>";
        }
    }

    if (semester == 8) {
        additional = semester8;
        printit = "<h2>PROFESSIONAL ELECTIVES 06</h2>";
        for (i=0 ; i< PE06s.length ; i++){
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist9'><span class='checkmark'></span> " + subjects[PE06s[i]][1] + "</label><br><br>";
        }
        printit += "<br><h2>PROFESSIONAL ELECTIVES 07</h2>";
        for (i=0 ; i< PE07s.length ; i++) {
            printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist10'><span class='checkmark'></span> " + subjects[PE07s[i]][1] + "</label><br><br>";
        }
    }

    printit = printit + "<p style='text-align: center;'><button onclick='setdetails("+ semester +");' class='climax-button'><span class='white'> --> </span>CONFIRM<span class='white'> <-- </span></button></p>";

    await sleep(500);
    document.getElementById('sem_results').innerHTML = printit;
    document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
    document.getElementById('sem_results').style.border = "#2196F3 solid";
    document.getElementById('sem_results').style.padding = "20px";   
}

function setdetails (semester) {
    if (semester == 3 || semester == 4) {
        var opens = document.getElementsByName('mylist1');
        for (i=0 ; i<opens.length ; i++) 
            if (opens[i].checked)
                additional.push(OEs[i]);
        
        if (semester == 4) {
            var msc = document.getElementsByName('mylist2');
            for (i=0 ; i<msc.length ; i++) 
                if (msc[i].checked)
                    additional.push(MSCs[i]);
        }
    }

    if (semester == 5) {
        var msc = document.getElementsByName('mylist2');
        for (i=0 ; i<msc.length ; i++) 
            if (msc[i].checked)
                additional.push(MSCs[i]);
        
        var psc = document.getElementsByName('mylist3');
        for (i=0 ; i<psc.length ; i++) 
            if (psc[i].checked)
                additional.push(PSCs[i]);
    }

    if (semester == 6) {
        var psc = document.getElementsByName('mylist3');
        for (i=0 ; i<psc.length ; i++) 
            if (psc[i].checked)
                additional.push(PSCs[i]);
        
        var pe1 = document.getElementsByName('mylist4');
        for (i=0 ; i<pe1.length ; i++) 
            if (pe1[i].checked)
                additional.push(PE01s[i]);
    }

    if (semester == 7) {
        var pe2 = document.getElementsByName('mylist5');
        for (i=0 ; i<pe2.length ; i++) 
            if (pe2[i].checked)
                additional.push(PE02s[i]);
        
        var pe3 = document.getElementsByName('mylist6');
        for (i=0 ; i<pe3.length ; i++) 
            if (pe3[i].checked)
                additional.push(PE03s[i]);

        var pe4 = document.getElementsByName('mylist7');
        for (i=0 ; i<pe4.length ; i++) 
            if (pe4[i].checked)
                additional.push(PE04s[i]);
        
        var pe5 = document.getElementsByName('mylist8');
        for (i=0 ; i<pe5.length ; i++) 
            if (pe5[i].checked)
                additional.push(PE05s[i]);
    }

    if (semester == 8) {
        var pe6 = document.getElementsByName('mylist9');
        for (i=0 ; i<pe6.length ; i++) 
            if (pe6[i].checked)
                additional.push(PE06s[i]);
        
        var pe7 = document.getElementsByName('mylist10');
        for (i=0 ; i<pe7.length ; i++) 
            if (pe7[i].checked)
                additional.push(PE07s[i]);
    }
    confirm(semester);
}

function confirm (semester) {
    skeleton = set_divelements(additional);
    skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate(" + semester + ");' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
    document.getElementById('sem_results').innerHTML = skeleton;
    document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
}

async function get_semester() {
    additional = [];
    s = document.getElementById('Semester').textContent * 1;
    r = document.getElementById('alter_width');

    r.classList.remove('selection');
    r.classList.add('selected');

    document.getElementById('final_result').style.display = "none";

    switch(s) {
        case 1:
            skeleton = set_divelements(semester1);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate(1);' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem_results').innerHTML = skeleton;
            document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
            document.getElementById('sem_results').style.border = "#2196F3 solid";
            break;

        case 2:
            skeleton = set_divelements(semester2);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate(2);' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem_results').innerHTML = skeleton;
            document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
            break;
        
        case 3:
            get_selections(3);
            break;

        case 4:
            get_selections(4);
            break;

        case 5:
            get_selections(5);
            break;

        case 6:
            get_selections(6);
            break;

        case 7:
            get_selections(7);
            break;

        case 8:
            get_selections(8);
            break;
    }
}

async function get_gpa () {
    var semester = document.getElementById('Semester').textContent * 1;
    var printer = "";
    
    r = document.getElementById('alter_width');

    r.classList.remove('selection');
    r.classList.add('selected');

    document.getElementById('final_result2').style.display = "none";

    for (i=0 ; i<semester ; i++) {
        printer = printer + "<p class='whitespace'>Enter your GPA of semester 0" + (i+1) + " :  ";
        printer = printer + "<input type='number' id='gpa" + (i+1) + "' max='10' min='5'>";
    }

    printer = printer + "<p style='text-align: center;'><button onclick='calculate_cgpa(" + semester + ");' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";

    await sleep(500);

    document.getElementById('gpa_result').innerHTML = printer;
    document.getElementById('gpa_result').style.padding = "20px";
    document.getElementById('gpa_result').style.border = "#2196F3 solid";
    document.getElementById('gpa_result').style.borderRadius = "20px";
    document.getElementById('gpa_result').style.width = "75%";
    document.getElementById('gpa_result').style.textAlign = "center";
}