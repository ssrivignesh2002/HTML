let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function updateDisplay() {
    let time = new Date(elapsedTime);
    let minutes = String(time.getUTCMinutes()).padStart(2, '0');
    let seconds = String(time.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
    document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function stop() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    updateDisplay();
}
