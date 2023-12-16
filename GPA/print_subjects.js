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

async function get_selections(listOfElectives) {
    var printit = "";
    mylist = new Set();
    for (const e of listOfElectives) {
        switch(e) {
            case "OE": 
                printit += "<h2>OPEN ELECTIVES</h2>";
                for (i=0 ; i< OEs.length ; i++){
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist1'><span class='checkmark'></span> " + subjects[OEs[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist1');
                break;
            case "MSC":
                printit += "<br><h2>MATHEMATICS SOFTCORE</h2>";
                for (i=0 ; i< MSCs.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist2'><span class='checkmark'></span> " + subjects[MSCs[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist2');
                break;
            case "PSC":
                printit += "<br><h2>PROFESSIONAL SOFTCORE</h2>";
                for (i=0 ; i< PSCs.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist3'><span class='checkmark'></span> " + subjects[PSCs[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist3');
                break;
            case "PE01":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 01</h2>";
                for (i=0 ; i< PE01s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist4'><span class='checkmark'></span> " + subjects[PE01s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist4');
                break;
            case "PE02":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 02</h2>";
                for (i=0 ; i< PE02s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist5'><span class='checkmark'></span> " + subjects[PE02s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist5');
                break;
            case "PE03":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 03</h2>";
                for (i=0 ; i< PE03s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist6'><span class='checkmark'></span> " + subjects[PE03s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist6');
                break;
            case "PE04":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 04</h2>";
                for (i=0 ; i< PE04s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist7'><span class='checkmark'></span> " + subjects[PE04s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist7');
                break;
            case "PE05":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 05</h2>";
                for (i=0 ; i< PE05s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist8'><span class='checkmark'></span> " + subjects[PE05s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist8');
                break;
            case "PE06":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 06</h2>";
                for (i=0 ; i< PE06s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist9'><span class='checkmark'></span> " + subjects[PE06s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist9');
                break;
            case "PE07":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 07</h2>";
                for (i=0 ; i< PE07s.length ; i++) {
                    printit = printit + "<label class='custom-checkbox'><input type='checkbox' value='" + i + "' name='mylist10'><span class='checkmark'></span> " + subjects[PE07s[i]][1] + "</label><br><br>";
                }
                printit += "<br>";
                mylist.add('mylist10');
                break;
        }
    }

    printit = printit + "<p style='text-align: center;'><button onclick='setdetails();' class='climax-button'><span class='white'> --> </span>CONFIRM<span class='white'> <-- </span></button></p>";

    await sleep(500);
    document.getElementById('sem_results').innerHTML = printit;
    document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
    document.getElementById('sem_results').style.border = "#2196F3 solid";
    document.getElementById('sem_results').style.padding = "20px";   
}

function setdetails () {
    for (const e of mylist) {
        var temp = document.getElementsByName(e);
        var tempArray = [];
        switch (e) {
            case 'mylist1': tempArray = OEs; break;
            case 'mylist2': tempArray = MSCs; break;
            case 'mylist3': tempArray = PSCs; break;
            case 'mylist4': tempArray = PE01s; break;
            case 'mylist5': tempArray = PE02s; break;
            case 'mylist6': tempArray = PE03s; break;
            case 'mylist7': tempArray = PE04s; break;
            case 'mylist8': tempArray = PE05s; break;
            case 'mylist9': tempArray = PE06s; break;
            case 'mylist10': tempArray = PE07s; break;
        }
        for (i=0 ; i<temp.length ; i++) 
            if (temp[i].checked)
                additional.push(tempArray[i]);
    }
    semester = 0;
    if (mylist[mylist.length - 1] == 'mylist1') semester = 3;
    else if (mylist[mylist.length - 1] == 'mylist2') semester = 4;
    else if (mylist[mylist.length - 1] == 'mylist3') semester = 5;
    else if (mylist[mylist.length - 1] == 'mylist5') semester = 6;
    else if (mylist[mylist.length - 1] == 'mylist8') semester = 7;
    else if (mylist[mylist.length - 1] == 'mylist10') semester = 8;
    confirm(semester);
}

function confirm (semester) {
    skeleton = set_divelements(additional);
    skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
    document.getElementById('sem_results').innerHTML = skeleton;
    document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
}

async function get_semester(d) {
    additional = [];
    code = d*1;
    s = document.getElementById('Semester').textContent * 1;
    r = document.getElementById('alter_width');

    r.classList.remove('selection');
    r.classList.add('selected');

    document.getElementById('final_result').style.display = "none";

    if (code==1) switch(s) {
        case 1:
            additional = semesters["semester1"];
            skeleton = set_divelements(additional);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem_results').innerHTML = skeleton;
            document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
            document.getElementById('sem_results').style.border = "#2196F3 solid";
            break;

        case 2:
            additional = semesters["semester2"];
            skeleton = set_divelements(additional);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem_results').innerHTML = skeleton;
            document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
            break;
        
        case 3:
            get_selections(electives.slice(0,1));
            additional = semesters["semester3"];
            break;

        case 4:
            get_selections(electives.slice(0,2));
            additional = semesters["semester4"];
            break;

        case 5:
            get_selections(electives.slice(1,3));
            additional = semesters["semester5"];
            break;

        case 6:
            get_selections(electives.slice(2,5));
            additional = semesters["semester6"];
            break;

        case 7:
            get_selections(electives.slice(5,8));
            additional = semesters["semester7"];
            break;

        case 8:
            get_selections(electives.slice(8));
            additional = semesters["semester8"];
            break;
    }
    else {
        for (i=1 ; i<=s ; i++) 
            additional = additional.concat(semesters["semester"+i]);
        if (s <= 2) {
            skeleton = set_divelements(semesters["semester1"]);
            if (s == 2)
                skeleton += set_divelements(semesters["semester2"]);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem_results').innerHTML = skeleton;
            document.getElementById('sem_results').style.width = (initialViewportWidth <= 950)?"75%":"100%";
            document.getElementById('sem_results').style.border = "#2196F3 solid";
        }
        else {
            if (s >= 3)
                get_selections(
                    (s==3)?electives.slice(0,1):((s==4)?electives.slice(0,2):
                    ((s==5)?electives.slice(0,3):((s==6)?electives.slice(0,5):
                    ((s==7)?electives.slice(0,8):electives))))
                );
        }
    }
}
