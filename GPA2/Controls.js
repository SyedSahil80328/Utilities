function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function checkIfLateral(val) {
    var actVal = val*1;
    answered = 1;
    if (actVal == 1) {
        startSem = 3;
        document.getElementById("semester").textContent = 3;
    }
    else {
        startSem = 1;
        document.getElementById("semester").textContent = 1;
    }
    document.getElementById("my-body").style.display = "block";
    document.getElementById("lateral-checker").style.display = "none";

}

function myEventListener () {
    d = document.querySelector('.progressive-bar');
    let subjectCount = 1;
    let initialWidth = document.querySelector('.slider').offsetWidth * 1/additional.length;
    d.style.width = `${initialWidth}px`;

    r = document.querySelectorAll('.inner-slider');

    if (device == "desktop") {
        var keyDownActive = false;
        var wheelActive = false;
        
        r.forEach(function (element) {
            element.addEventListener('keydown', function (event) {
                if (d.classList.contains('progressive-bar') && !keyDownActive) {
                    keyDownActive = true;
        
                    if (event.key === 'ArrowLeft' && subjectCount !== 1) {
                        d.style.width = `${--subjectCount * initialWidth}px`;
                    } else if (event.key === 'ArrowRight' && subjectCount !== additional.length) {
                        d.style.width = `${++subjectCount * initialWidth}px`;
                    }
        
                    setTimeout(function () {
                        keyDownActive = false;
                    }, 250); // Adjust the delay time as needed
                }
            });
        
            element.addEventListener('wheel', function (event) {
                if (d.classList.contains('progressive-bar') && !wheelActive && event.shiftKey) {
                    wheelActive = true;
        
                    if (event.deltaY < 0 && subjectCount !== 1) {
                        d.style.width = `${--subjectCount * initialWidth}px`;
                    } else if (event.deltaY > 0 && subjectCount !== additional.length) {
                        d.style.width = `${++subjectCount * initialWidth}px`;
                    }
        
                    setTimeout(function () {
                        wheelActive = false;
                    }, 125); // Adjust the delay time as needed
                }
            });
        });
        
        document.addEventListener('click', function (event) {
            if (!Array.from(r).some(elem => elem.contains(event.target))) {
                r.forEach(function (element) {
                    element.style.background = 'white';
                });
    
                document.getElementById('messenger').textContent = message;
            }
        });

        r.forEach(function(element) {
            element.addEventListener('click', function () {
                for (i=0 ; i<r.length ; i++)    
                    r[i].style.background = "#3498db";
                document.getElementById('messenger').textContent = "Control with left/right arrow button to change course";
            });
        });
    }
    else {
        d.style.background = "none";
        d.textContent = "Please use desktop for animated features.";
        d.style.width = "100%";
        d.style.height = "45px";
    }
}
