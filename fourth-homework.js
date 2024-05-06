// Part 1
class Calculator {
	constructor(x, y) {
		if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
			throw new Error('Invalid numbers provided');
		}
		this.x = x;
		this.y = y;
	}

	setX(x) {
		if (!this.isValidNumber(x)) {
			throw new Error('Invalid number provided');
		}
		this.x = x;
	}

	setY(y) {
		if (!this.isValidNumber(y)) {
			throw new Error('Invalid number provided');
		}
		this.y = y;
	}

	logSum() {
		return this.x + this.y;
	}

	logMul() {
		return this.x * this.y;
	}

	logSub() {
		return this.x - this.y;
	}

	logDiv() {
		if (this.y === 0) {
			throw new Error('Division by zero is not allowed');
		}
		return this.x / this.y;
	}

	isValidNumber(num) {
		return typeof num === 'number' && isFinite(num);
	}
}

// Creating an instance of the Calculator class
const calculator = new Calculator(5, 2);

// Methods of the second group working correctly even if placed in a separate variable
const logSumRef = calculator.logSum();
console.log(logSumRef); // Output: 7

// Part 2
console.log("Start");

const promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		console.log("Promise 1 resolved after 2 seconds");
		res();
	}, 2000);
});

const promise2 = new Promise((res, rej) => {
	setTimeout(() => {
		console.log("Promise 2 resolved after 1 second");
		res();
	}, 1000);
});

Promise.all([promise1, promise2])
	.then(() => {
		console.log("Both promises resolved");
	})
	.catch((error) => {
		console.error("Error occurred:", error.message);
	});
	
console.log("End");
