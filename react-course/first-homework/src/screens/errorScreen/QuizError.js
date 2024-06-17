// src/screens/Error.js
import React from 'react';
import classes from './QuizError.module.css';

const QuizError = () => {
	return (
		<div className={classes.errorContainer}>
			<h1 className={classes.errorTitle}>Error</h1>
			<p className={classes.errorMessage}>No quiz questions available.</p>
			<p className={classes.errorInstructions}>Please check back later.</p>
		</div>
	);
};

export default QuizError;
