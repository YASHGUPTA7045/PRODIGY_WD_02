let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 10);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.querySelector('.display').textContent = '00:00:00';
    document.querySelector('.laps').innerHTML = '';
}

function updateStopwatch() {
    milliseconds++;
    if (milliseconds >= 99) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    displayTime();
}

function displayTime() {
    const display = document.querySelector('.display');
    display.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.querySelector('.display').textContent;
        const lapList = document.querySelector('.laps');
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapList.appendChild(li);
    }
}
