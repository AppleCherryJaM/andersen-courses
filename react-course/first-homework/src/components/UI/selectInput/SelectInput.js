import React from 'react';
import './SelectInput.css';

const SelectInput = ({ label, options, value, onChange }) => {
	return (
		<div className="input-container">
			<label className="input-label">{label}:</label>
			<select value={value} onChange={onChange} className="input-field">
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectInput;
