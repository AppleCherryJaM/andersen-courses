//First homework. Task 1
console.log(
	'The letter count in "console" is',
	('console').match(/./g).length + ('console').match(/l/g).length * ('console').match(/./g).length,
	'but it evaluates to',
	('console').match(/./g).length * ('console').match(/l/g).length
); //output: The letter count in "console" is 14 but it evaluates to 7

//First homework. Task 2
const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

if (!isNaN(number)) {
	console.log("Binary representation of", number, "is:", number.toString(2));
} else {
	console.log("Invalid input. Please enter a valid number.");
}

//Second homework. Task 1
const myIterable = {
	from: 1,
	to: 4,
	[Symbol.iterator]: () => {
		const from = Number(this.from);
		const to = Number(this.to);

		if (isNaN(from) || isNaN(to) || to < from) {
			throw new Error('Invalid range specified.');
		}

		let current = from;

		return {
			next: () => {
				if (current <= to) {
					return { value: current++, done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
};

// Example usage:
try {
	for (let item of myIterable) {
		console.log(item);
	}
} catch (error) {
	console.error(error.message);
}

//Second homework. Task 2
function getPersons(name, age) {
	function Person() {
		this.name = name;
		this.age = age;
	}
	Person.prototype = {
		constructor: function () {
			this.name = name;
			this.age = age
		}
	};

	const person1 = new Person();

	const person2 = Object.create(Person.prototype);
	person2.constructor(); // Initialize properties

	return [person1, person2];
}

const name = "John";
const age = 30;
const people = getPersons(name, age);

people.forEach((person, index) => {
	console.log(`Person ${index + 1}:`, person);
});
/*
Output: 
Person 1: { name: 'John', age: 30 }
Person 2: { name: 'John', age: 30 }
*/