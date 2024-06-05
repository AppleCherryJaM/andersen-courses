import React from 'react';
import './NumberInput.css';

const NumberInput = ({ value, onChange, min, max }) => {
	return (
		<div className="input-container">
			<label className="input-label">Number of questions:</label>
			<input
				type="number"
				value={value}
				onChange={onChange}
				min={min}
				max={max}
				className="input-field"
			/>
		</div>
	);
};

export default NumberInput;
