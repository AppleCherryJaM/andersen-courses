//Part 1

Array.prototype.myFilter = function (callback, thisArg) {
	if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}

	let filteredArray = [];
	for (let i = 0; i < this.length; i++) {
		if (i in this) {
			if (callback.call(thisArg, this[i], i, this)) {
				filteredArray.push(this[i]);
			}
		}
	}
	return filteredArray;
};

//example pf usage
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.myFilter(function (element) {
	return element % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]


//Part 2
const newAlert = () => {
	console.log("This is a new alert implementation!");
	confirm("Press OK to continue");
};

const newConfirm = () => {
	console.log("This is a new confirm implementation!");
	prompt("Please enter something:");
};

const newPrompt = () => {
	console.log("This is a new prompt implementation!");
	alert("You entered: " + prompt("Please enter something:"));
};

[alert, confirm, prompt] = [newConfirm, newPrompt, newAlert];

// Example usage
alert("This is a custom alert");
