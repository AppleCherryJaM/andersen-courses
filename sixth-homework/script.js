function randomIntegerTop(min, max) {
	let rand = min + Math.random() * (max - min)
	rand = Math.round(rand);
	return rand;
}
function randomIntegerLeft(min, max) {
	let rand = min + Math.random() * (max - min)
	rand = Math.round(rand);
	return rand;
}

let button = document.getElementById("clickMeButton");

button.addEventListener('click', () => {
	button.style.cssText += 'display: none';
	button.style.marginTop = randomIntegerTop(1, 380) + "px";
	button.style.marginLeft = randomIntegerLeft(1, 380) + "px";
	setTimeout(() => {
		button.style.cssText += 'display: block';
	}, 1000);
});

button.addEventListener("mouseover", () => {
	let probability = Math.floor(Math.random() * 2);
	if (!probability) {
		button.style.cssText += 'display: none';
		setTimeout(() => {
			button.style.cssText += 'display: block';
		}, 1000);
	}
})