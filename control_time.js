var setHrs = 0,setMins = 0,setSecs = 0;
function incHours () {
    setHrs = document.getElementById('hours').textContent * 1 + 1;
    hrStyle = document.getElementById("resetHours");
    if (setHrs == 24)
        setHrs = 0;
    var newsetHrs = "0";
    if (setHrs < 10)
        newsetHrs = newsetHrs + setHrs;
    else   
        newsetHrs = setHrs;
    
    if (setHrs) 
        hrStyle.style.display = "block";
    else    
        hrStyle.style.display = "none";

    document.getElementById('hours').innerHTML = newsetHrs;
}

function decHours () {
    var setHrs = document.getElementById('hours').textContent * 1 - 1;
    hrStyle = document.getElementById("resetHours");
    if (setHrs == -1)
        setHrs = 23;
    var newsetHrs = "0";
    if (setHrs < 10)
        newsetHrs = newsetHrs + setHrs;
    else   
        newsetHrs = setHrs;
    
    if (setHrs) 
        hrStyle.style.display = "block";
    else    
        hrStyle.style.display = "none";

    document.getElementById('hours').innerHTML = newsetHrs;
}

function incMinutes () {
    var setMins = document.getElementById('minutes').textContent * 1 + 1;
    mnStyle = document.getElementById("resetMinutes");
    if (setMins == 60)
        setMins = 0;
    var newsetMins = "0";
    if (setMins < 10)
        newsetMins = newsetMins + setMins;
    else   
        newsetMins = setMins;

    if (setMins) 
        mnStyle.style.display = "block";
    else    
        mnStyle.style.display = "none";

    document.getElementById('minutes').innerHTML = newsetMins;
}

function decMinutes () {
    var setMins = document.getElementById('minutes').textContent * 1 - 1;
    mnStyle = document.getElementById("resetMinutes");
    if (setMins == -1)
        setMins = 59;
    var newsetMins = "0";
    if (setMins < 10)
        newsetMins = newsetMins + setMins;
    else   
        newsetMins = setMins;

    if (setMins) 
        mnStyle.style.display = "block";
    else    
        mnStyle.style.display = "none";

    document.getElementById('minutes').innerHTML = newsetMins;
}

function incSeconds () {
    var setSecs = document.getElementById('seconds').textContent * 1 + 1;
    scStyle = document.getElementById("resetSeconds");
    if (setSecs == 60)
        setSecs = 0;
    var newsetSecs = "0";
    if (setSecs < 10)
        newsetSecs = newsetSecs + setSecs;
    else   
        newsetSecs = setSecs;

    if (setSecs) 
        scStyle.style.display = "block";
    else    
        scStyle.style.display = "none";

    document.getElementById('seconds').innerHTML = newsetSecs;
}

function decSeconds () {
    var setSecs = document.getElementById('seconds').textContent * 1 - 1;
    scStyle = document.getElementById("resetSeconds");
    if (setSecs == -1)
        setSecs = 59;
    var newsetSecs = "0";
    if (setSecs < 10)
        newsetSecs = newsetSecs + setSecs;
    else   
        newsetSecs = setSecs;

    if (setSecs) 
        scStyle.style.display = "block";
    else    
        scStyle.style.display = "none";

    document.getElementById('seconds').innerHTML = newsetSecs;
}
