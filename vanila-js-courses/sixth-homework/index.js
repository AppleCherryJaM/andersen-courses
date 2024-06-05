document.addEventListener("DOMContentLoaded", function () {
	// Stopwatch functionality
	let stopwatchInterval;
	let stopwatchTime = 0;
	const stopwatchDisplay = document.getElementById("stopwatch");

	function formatTime(timeInSeconds) {
		const hours = Math.floor(timeInSeconds / 3600);
		const minutes = Math.floor((timeInSeconds % 3600) / 60);
		const seconds = timeInSeconds % 60;
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function startStopwatch() {
		if (!stopwatchInterval) {
			stopwatchInterval = setInterval(() => {
				stopwatchTime++;
				stopwatchDisplay.textContent = formatTime(stopwatchTime);
			}, 1000);
		}
	}

	function stopStopwatch() {
		clearInterval(stopwatchInterval);
		stopwatchInterval = null;
	}

	function resetStopwatch() {
		clearInterval(stopwatchInterval);
		stopwatchInterval = null;
		stopwatchTime = 0;
		stopwatchDisplay.textContent = formatTime(stopwatchTime);
	}

	document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
	document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);
	document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

	// Timer functionality
	let timerInterval;
	let timerTime = 0;
	const timerInput = document.getElementById("timerInput");
	const timerDisplay = document.getElementById("timerDisplay");

	function parseTimeInput(input) {
		const parts = input.split(':');
		if (parts.length === 2) {
			const minutes = parseInt(parts[0]);
			const seconds = parseInt(parts[1]);
			if (!isNaN(minutes) && !isNaN(seconds)) {
				return minutes * 60 + seconds;
			}
		}
		return 0;
	}

	function updateTimerDisplay() {
		const minutes = Math.floor(timerTime / 60);
		const seconds = timerTime % 60;
		timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function startTimer() {
		if (!timerInterval) {
			timerTime = parseTimeInput(timerInput.value);
			if (timerTime > 0) {
				timerInterval = setInterval(() => {
					if (timerTime > 0) {
						timerTime--;
						updateTimerDisplay();
					} else {
						clearInterval(timerInterval);
						timerInterval = null;
						alert("Timer finished!");
					}
				}, 1000);
			}
		}
	}

	function stopTimer() {
		clearInterval(timerInterval);
		timerInterval = null;
	}

	function resetTimer() {
		clearInterval(timerInterval);
		timerInterval = null;
		timerTime = 0;
		updateTimerDisplay();
		timerInput.value = '';
	}

	function addMinute() {
		timerTime += 60;
		updateTimerDisplay();
	}

	document.getElementById("startTimer").addEventListener("click", startTimer);
	document.getElementById("stopTimer").addEventListener("click", stopTimer);
	document.getElementById("resetTimer").addEventListener("click", resetTimer);
	document.getElementById("addMinute").addEventListener("click", addMinute);

	// Initial display update
	updateTimerDisplay();
});
