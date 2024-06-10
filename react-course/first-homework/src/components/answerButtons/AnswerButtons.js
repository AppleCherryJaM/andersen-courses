// src/components/AnswerButtons.js
import React, { useContext, useRef, useState } from 'react';

import { ScoreContext } from '../../context/ScoreContext';
// import ButtonInput from '../UI/buttonInput/ButtonInput';
import classes from './AnswerButtons.module.css';

const AnswerButtons = ({ options }) => {
	// const [isCorrect, setIsCorrect] = useState(false)
	const answerOptions = useRef(null);
	const { checkAnswer } = useContext(ScoreContext);
	// const className = classnames(isCorrect? "AnswerButtons_correct__EXfms" : null)
	// const checkOnAns = () => {

	// }
	console.log("AnswerOption: ", answerOptions.current);

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
