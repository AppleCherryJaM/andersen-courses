// src/components/AnswerButtons.js
import React, { useContext, useRef, useState } from 'react';

import { QuizContext } from '../../context/QuizContext';
// import ButtonInput from '../UI/buttonInput/ButtonInput';
import classes from './AnswerButtons.module.css';

const AnswerButtons = ({ options, isLocked }) => {
	const answerOptions = useRef(null);
	const { checkAnswer } = useContext(QuizContext);
	if (!isLocked) {
		Array.prototype.forEach.call(
			document.getElementsByClassName(classes.answerButton),
			(element) => { element.classList.remove(classes.correct); element.classList.remove(classes.incorrect) }
		);
	}

	return (
		<ul ref={answerOptions} className={classes.answerButtons}>
			{options.answers.map((option, index) => (
				<li id={Date.now()} key={index} className={`${classes.answerButton}`} value={option} onClick={(event) => {
					checkAnswer(event, option);
				}}>
					{option}
				</li>
			))}
		</ul>
	);
};

export default AnswerButtons;
