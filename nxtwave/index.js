let timer;
let timeLeft = 1500;
let isRunning = false;

let display = document.getElementById('timerDisplay');
let alarmSound = document.getElementById('alarmSound');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

let currentMode = 'pomodoro';
function setMode(mode) {
    currentMode = mode;
    switch (mode) {
        case 'pomodoro':
            timeLeft = 1500;
            break;
        case 'short':
            timeLeft = 300;
            break;
        case 'long':
            timeLeft = 900;
            break;
    }
    updateDisplay();
}
updateDisplay();

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alarmSound.play();
            }
        }, 1000);
    }
}


function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    updateDisplay();
}


function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    setMode(currentMode);
}

let short = 'short';
let long = 'long';


function shortBreak() {
    clearInterval(timer);
    isRunning = false;
    setMode(short);
}
function longBreak() {
    clearInterval(timer);
    isRunning = false;
    setMode(long);
}