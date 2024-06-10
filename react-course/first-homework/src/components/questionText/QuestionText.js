import React from 'react';
import classes  from './QuestionText.module.css';

const QuestionText = ({ text, index }) => {
	return <h2 className={classes.questionText}>{index}. {text}</h2>;
};

export default QuestionText;