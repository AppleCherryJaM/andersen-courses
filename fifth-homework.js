class Stack {
	constructor(maxSize = 10) {
		if (!Number.isInteger(maxSize) || maxSize <= 0) {
			throw new Error('Invalid maximum size provided');
		}
		this.maxSize = maxSize;
		this.stack = [];
	}

	push(elem) {
		if (this.stack.length === this.maxSize) {
			throw new Error('Stack is full');
		}
		this.stack.push(elem);
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		return this.stack.pop();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		return this.stack[this.stack.length - 1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}

	toArray() {
		return [...this.stack];
	}

	static fromIterable(iterable) {
		if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
			throw new Error('Iterable entity is required');
		}
		const stack = new Stack(iterable.length);
		for (const elem of iterable) {
			stack.push(elem);
		}
		return stack;
	}
}

// Example usage:
const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toArray()); // Output: [1, 2, 3]
console.log(stack.peek()); // Output: 3
stack.pop();
console.log(stack.toArray()); // Output: [1, 2]
console.log(stack.isEmpty()); // Output: false

const newStack = Stack.fromIterable([4, 5, 6]);
console.log(newStack.toArray()); // Output: [4, 5, 6]
