function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stopper () {
    var ALARM = document.getElementById('alarm');
    ALARM.play();
    await sleep(1000);
    document.getElementById('the_end').style.display = 'block';
    document.getElementById('continue').style.display = 'none';
    document.getElementById('stop').style.display = 'none';

}

async function stop_playing() {
    await sleep(1000);
    var ALARM = document.getElementById('alarm');
    ALARM.pause();
    ALARM.currentTime = 0;  
    document.getElementById('starter').style.display = 'block';
    h = document.getElementById("appear_hours");
    m = document.getElementById("appear_minutes");
    s = document.getElementById("appear_seconds");
    document.getElementById('the_end').style.display = 'none';
    h.style.display = 'block';
    m.style.display = 'block';
    s.style.display = 'block';
}

let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isPaused = false;

function startTimer() {
    document.getElementById('starter').style.display = 'none';
    document.getElementById('continue').style.display = 'block';
    document.getElementById('stop').style.display = 'block';

    document.getElementById('appear_hours').style.display = 'none';
    document.getElementById('appear_minutes').style.display = 'none';
    document.getElementById('appear_seconds').style.display = 'none';

    document.getElementById('resetHours').style.display = 'none';
    document.getElementById('resetMinutes').style.display = 'none';
    document.getElementById('resetSeconds').style.display = 'none';

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Reset timer if it's already running
    hours = document.getElementById('hours').textContent*1;
    minutes = document.getElementById('minutes').textContent*1;
    seconds = document.getElementById('seconds').textContent*1;
    isPaused = false;
    updateDisplay();

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!isPaused) {
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                    } else {
                    // Timer is finished, stop the interval
                        clearInterval(timerInterval);
                        stopper();
                    }
            }
        }
        updateDisplay();
    }
}

function PAUSE() {
    isPaused = !isPaused;
    document.getElementById('continue').innerHTML = "<button onclick='CONTINUE();' class='icon'>CONTINUE</button>";
}

function CONTINUE() {
    isPaused = !isPaused;
    document.getElementById('continue').innerHTML = "<button onclick='PAUSE();' class='icon'>PAUSE</button>";
}

function STOP() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById('appear_hours').style.display = 'block';
    document.getElementById('appear_minutes').style.display = 'block';
    document.getElementById('appear_seconds').style.display = 'block';

    document.getElementById('starter').style.display = 'block';
    document.getElementById('continue').style.display = 'none';
    document.getElementById('stop').style.display = 'none';

    isPaused = false;
    updateDisplay();
}

function updateDisplay() {
    const hoursStr = hours < 10 ? '0' + hours : hours;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hours').textContent = hoursStr;
    document.getElementById('minutes').textContent = minutesStr;
    document.getElementById('seconds').textContent = secondsStr;
}