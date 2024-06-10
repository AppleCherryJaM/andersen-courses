import React from 'react';
import classes from './ProgressBar.module.css';

const ProgressBar = ({ current, total }) => {
	return (
		<div className={classes.progressBar}>
			Question {current} out of {total}
		</div>
	);
};

export default ProgressBar;