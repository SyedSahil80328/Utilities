function setDivElements (codes) {
    i = 0;
    printer = 
    `<div id="messenger">${message}</div>
     <section class="slider-container">
        <div class="slider-wrapper">
            <div class="slider">`;
    while (i < codes.length) {
        printer +=
                `<div class="inner-slider" tabindex="0">
                    <div class='element'>${subjects[codes[i]][1]} (${i+1} of ${codes.length})<br><p class='grade-style grade-O' id='${codes[i]}'>O</p>
                        <button onclick='incGrade("${codes[i]}");' class='up-unclicked'><i class='fas fa-arrow-up'></i></button>
                        <button onclick='decGrade("${codes[i++]}");' class='down-unclicked'><i class='fas fa-arrow-down'></i></button>
                    </div>
                </div>`;
    }
    printer = `${printer}
            </div>
            <div class="progressive-bar"></div>
        </div>
    </section>`;
    return printer;
}

async function getSelections(listOfElectives) {
    printit = "";
    myList = new Set();
    for (const e of listOfElectives) {
        switch (e) {
            case "OE":
                printit += "<h2>OPEN ELECTIVES</h2>";
                for (i = 0; i < OEs.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist1'><span class='checkmark'></span> ${subjects[OEs[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist1');
                break;
            case "MSC":
                printit += "<br><h2>MATHEMATICS SOFTCORE</h2>";
                for (i = 0; i < MSCs.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist2'><span class='checkmark'></span> ${subjects[MSCs[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist2');
                break;
            case "PSC":
                printit += "<br><h2>PROFESSIONAL SOFTCORE</h2>";
                for (i = 0; i < PSCs.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist3'><span class='checkmark'></span> ${subjects[PSCs[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist3');
                break;
            case "PE01":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 01</h2>";
                for (i = 0; i < PE01s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist4'><span class='checkmark'></span> ${subjects[PE01s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist4');
                break;
            case "PE02":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 02</h2>";
                for (i = 0; i < PE02s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist5'><span class='checkmark'></span> ${subjects[PE02s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist5');
                break;
            case "PE03":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 03</h2>";
                for (i = 0; i < PE03s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist6'><span class='checkmark'></span> ${subjects[PE03s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist6');
                break;
            case "PE04":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 04</h2>";
                for (i = 0; i < PE04s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist7'><span class='checkmark'></span> ${subjects[PE04s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist7');
                break;
            case "PE05":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 05</h2>";
                for (i = 0; i < PE05s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist8'><span class='checkmark'></span> ${subjects[PE05s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist8');
                break;
            case "PE06":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 06</h2>";
                for (i = 0; i < PE06s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist9'><span class='checkmark'></span> ${subjects[PE06s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist9');
                break;
            case "PE07":
                printit += "<br><h2>PROFESSIONAL ELECTIVES 07</h2>";
                for (i = 0; i < PE07s.length; i++) {
                    printit += `<label class='custom-checkbox'><input type='checkbox' value='${i}' name='mylist10'><span class='checkmark'></span> ${subjects[PE07s[i]][1]}</label><br><br>`;
                }
                printit += "<br>";
                myList.add('mylist10');
                break;
        }
    }

    printit += "<p style='text-align: center;'><button onclick='setDetails();' class='climax-button'><span class='white'> --> </span>CONFIRM<span class='white'> <-- </span></button></p>";
    await sleep(500);
    document.getElementById('sem-results').innerHTML = printit;
    document.getElementById('sem-results').style.width = myWidth;
    document.getElementById('sem-results').style.border = "#2196F3 solid";
    document.getElementById('sem-results').style.padding = "20px";
}

function setDetails () {
    for (const e of myList) {
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
    confirm();
}

function confirm () {
    skeleton = setDivElements(additional);
    skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
    document.getElementById('sem-results').innerHTML = skeleton;
    document.getElementById('sem-results').style.width = myWidth;
    myEventListener();
}

async function getSemester(d) {
    code = d*1;
    s = document.getElementById('semester').textContent * 1;
    r = document.getElementById('alter-width');

    r.classList.remove('selection');
    r.classList.add('selected');

    document.getElementById('final-result').style.display = "none";

    if (code==1) switch(s) {
        case 1:
            additional = empty.concat(semesters["semester1"]);
            skeleton = setDivElements(additional);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem-results').innerHTML = skeleton;
            document.getElementById('sem-results').style.width = myWidth;
            document.getElementById('sem-results').style.border = "#2196F3 solid";
            myEventListener();
            break;

        case 2:
            additional = empty.concat(semesters["semester2"]);
            skeleton = setDivElements(additional);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem-results').innerHTML = skeleton;
            document.getElementById('sem-results').style.width = myWidth;
            document.getElementById('sem-results').style.border = "#2196F3 solid";
            myEventListener();
            break;
        
        case 3:
            additional = empty.concat(semesters["semester3"]);
            getSelections(electives.slice(0,1));
            break;

        case 4:
            additional = empty.concat(semesters["semester4"]);
            getSelections(electives.slice(0,2));
            break;

        case 5:
            additional = empty.concat(semesters["semester5"]);
            getSelections(electives.slice(1,3));
            break;

        case 6:
            additional = empty.concat(semesters["semester6"]);
            getSelections(electives.slice(2,5));
            break;

        case 7:
            additional = empty.concat(semesters["semester7"]);
            getSelections(electives.slice(3));
            break;

        case 8:
            additional = empty.concat(semesters["semester8"]);
            skeleton = setDivElements(additional);
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem-results').innerHTML = skeleton;
            document.getElementById('sem-results').style.width = myWidth;
            document.getElementById('sem-results').style.border = "#2196F3 solid";
            myEventListener();
            break;
    }
    else {
        additional = [];
        for (i=startSem ; i<=s ; i++) 
            additional = additional.concat(semesters["semester"+i]);
        if (s <= 2) {
            if (s == 1)
                skeleton = setDivElements(semesters["semester1"]);
            else
                skeleton = setDivElements(semesters["semester1"].concat(semesters["semester2"]));
            skeleton = skeleton + "<p style='text-align: center;'><button onclick='calculate();' class='climax-button'><span class='white'> --> </span>CALCULATE<span class='white'> <-- </span></button></p>";
            await sleep(500);
            document.getElementById('sem-results').innerHTML = skeleton;
            document.getElementById('sem-results').style.width = myWidth;
            document.getElementById('sem-results').style.border = "#2196F3 solid";
            myEventListener();
        }
        else {
            alert(`Don't simply click OK!
            \nPlease fully read this alert for better usage.
            \n\n\nElective subjects are followed by mandatory subjects.
            \nExample, if you are in semester 4 and clicking CTS and EVS for OE and LA and TOC for MSC, CTS and EVS will come after OS, not BEEE.
            \nDon't get confused that CTS is not included.`);
            getSelections(
                (s==3)?electives.slice(0,1):((s==4)?electives.slice(0,2):
                ((s==5)?electives.slice(0,3):((s==6)?electives.slice(0,5):electives)))
            );
        }
    }
}
