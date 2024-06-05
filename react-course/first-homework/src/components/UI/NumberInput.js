import React from 'react';

const NumberInput = ({ value, onChange, min, max }) => {
	return (
		<div>
			<label>Number of questions: </label>
			<input
				type="number"
				value={value}
				onChange={onChange}
				min={min}
				max={max}
			/>
		</div>
	);
};

export default NumberInput;
