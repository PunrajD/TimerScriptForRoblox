let countdownTime = 7 * 24 * 60 * 60 * 1000;

function updateCountdownDisplay() {
    if (countdownTime >= 0) {
        const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((countdownTime % 1000) / 10);

        document.getElementById('countdown').innerHTML = 
            `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.getElementById('milliseconds').innerHTML = 
            `${String(milliseconds).padStart(2, '0')}`;

        countdownTime -= 10;
    } else {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = "00:00:00:00";
        document.getElementById('milliseconds').innerHTML = "00";
    }
}

function startCountdown() {
    updateCountdownDisplay();
    timerInterval = setInterval(updateCountdownDisplay, 10);
}

window.onload = startCountdown;
