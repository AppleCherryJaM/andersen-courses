document.addEventListener("DOMContentLoaded", function () {
	const clickMeButton = document.getElementById("clickMeButton");
	const timerInput = document.getElementById("timerInput");
	const startStopwatchButton = document.getElementById("startStopwatch");
	const stopStopwatchButton = document.getElementById("stopStopwatch");
	const resetStopwatchButton = document.getElementById("resetStopwatch");
	const startTimerButton = document.getElementById("startTimer");
	const stopTimerButton = document.getElementById("stopTimer");
	const resetTimerButton = document.getElementById("resetTimer");
	const addMinuteButton = document.getElementById("addMinute");

	let stopwatchInterval;
	let stopwatchTime = 0;

	function formatTime(timeInSeconds) {
		const hours = Math.floor(timeInSeconds / 3600);
		const minutes = Math.floor((timeInSeconds % 3600) / 60);
		const seconds = timeInSeconds % 60;
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function startStopwatch() {
		stopwatchInterval = setInterval(() => {
			stopwatchTime++;
			document.getElementById("stopwatch").textContent = formatTime(stopwatchTime);
		}, 1000);
		startStopwatchButton.disabled = true;
		stopStopwatchButton.disabled = false;
	}

	function stopStopwatch() {
		clearInterval(stopwatchInterval);
		startStopwatchButton.disabled = false;
		stopStopwatchButton.disabled = true;
	}

	function resetStopwatch() {
		clearInterval(stopwatchInterval);
		stopwatchTime = 0;
		document.getElementById("stopwatch").textContent = formatTime(stopwatchTime);
		startStopwatchButton.disabled = false;
		stopStopwatchButton.disabled = true;
	}

	function startTimer() {
		const timeInput = timerInput.value.trim();
		const timeParts = timeInput.split(":");
		if (timeParts.length !== 2 || isNaN(parseInt(timeParts[0])) || isNaN(parseInt(timeParts[1]))) {
			alert("Invalid time format. Please enter time in mm:ss format.");
			return;
		}
		const minutes = parseInt(timeParts[0]);
		const seconds = parseInt(timeParts[1]);
		const totalTime = minutes * 60 + seconds;

		let remainingTime = totalTime;
		document.getElementById("timerInput").disabled = true;
		startTimerButton.disabled = true;
		stopTimerButton.disabled = false;

		const timerInterval = setInterval(() => {
			if (remainingTime <= 0) {
				clearInterval(timerInterval);
				document.getElementById("timerInput").disabled = false;
				startTimerButton.disabled = false;
				stopTimerButton.disabled = true;
				alert("Timer finished!");
				return;
			}
			remainingTime--;
			document.getElementById("timerInput").value = formatTime(remainingTime);
		}, 1000);
	}

	function stopTimer() {
		document.getElementById("timerInput").disabled = false;
		startTimerButton.disabled = false;
		stopTimerButton.disabled = true;
	}

	function resetTimer() {
		document.getElementById("timerInput").disabled = false;
		document.getElementById("timerInput").value = "";
		startTimerButton.disabled = false;
		stopTimerButton.disabled = true;
	}

	function addMinuteToTimer() {
		const timeInput = timerInput.value.trim();
		const timeParts = timeInput.split(":");
		if (timeParts.length !== 2 || isNaN(parseInt(timeParts[0])) || isNaN(parseInt(timeParts[1]))) {
			alert("Invalid time format. Please enter time in mm:ss format.");
			return;
		}
		const minutes = parseInt(timeParts[0]);
		const seconds = parseInt(timeParts[1]);
		const totalTime = minutes * 60 + seconds + 60;
		document.getElementById("timerInput").value = formatTime(totalTime);
	}

	function getRandomPosition() {
		const x = Math.random() * (window.innerWidth - clickMeButton.offsetWidth);
		const y = Math.random() * (window.innerHeight - clickMeButton.offsetHeight);
		return { x, y };
	}

	function moveButtonRandomly() {
		const position = getRandomPosition();
		clickMeButton.style.left = `${position.x}px`;
		clickMeButton.style.top = `${position.y}px`;
	}

	clickMeButton.addEventListener("click", moveButtonRandomly);
	clickMeButton.addEventListener("mouseover", () => {
		const randomProbability = Math.random();
		if (randomProbability >= 0.5) {
			clickMeButton.style.display = "none";
			moveButtonRandomly();
			setTimeout(() => {
				clickMeButton.style.display = "block";
			}, 1000);
		}
	});

	startStopwatchButton.addEventListener("click", startStopwatch);
	stopStopwatchButton.addEventListener("click", stopStopwatch);
	resetStopwatchButton.addEventListener("click", resetStopwatch);
	startTimerButton.addEventListener("click", startTimer);
	stopTimerButton.addEventListener("click", stopTimer);
	resetTimerButton.addEventListener("click", resetTimer);
	addMinuteButton.addEventListener("click", addMinuteToTimer);
});


// document.addEventListener("DOMContentLoaded", function () {
// 	const clickMeButton = document.getElementById("clickMeButton");

// 	function getRandomPosition() {
// 		const x = Math.random() * (window.innerWidth - clickMeButton.offsetWidth);
// 		const y = Math.random() * (window.innerHeight - clickMeButton.offsetHeight);
// 		return { x, y };
// 	}

// 	function moveButtonRandomly() {
// 		const position = getRandomPosition();
// 		clickMeButton.style.left = `${position.x}px`;
// 		clickMeButton.style.top = `${position.y}px`;
// 	}

// 	clickMeButton.addEventListener("click", () => {
// 		clickMeButton.style.display = "none";
// 		moveButtonRandomly();
// 		setTimeout(() => {
// 			clickMeButton.style.display = "block";
// 		}, 1000);
// 	});

// 	clickMeButton.addEventListener("mouseover", () => {
// 		const randomProbability = Math.random();
// 		if (randomProbability >= 0.5) {
// 			clickMeButton.style.display = "none";
// 			moveButtonRandomly();
// 			setTimeout(() => {
// 				clickMeButton.style.display = "block";
// 			}, 1000);
// 		}
// 	});
// });
