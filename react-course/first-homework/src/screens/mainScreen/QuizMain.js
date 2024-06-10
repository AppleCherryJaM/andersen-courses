import React, { useState, useRef } from 'react';
import { Questions as quizData } from '../../data/Questions';
import QuestionText from '../../components/questionText/QuestionText';
import ProgressBar from '../../components/progressBar/ProgressBar';
import AnswerButtons from '../../components/answerButtons/AnswerButtons';
// import ButtonInput from '../../components/UI/buttonInput/ButtonInput';
// import Timer from '../../components/timer/Timer';
import { ScoreContext } from '../../context/ScoreContext';

import classes from './QuizMain.module.css';

const QuizMain = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0); 
	const [currentQuestion, setCurrentQuestion] = useState(quizData[currentQuestionIndex]);
	const [isLocked, setIsLocked] = useState(false);
	// let optionList = [];
	// for (let i = 0; i < questionOptions.answers.length; i++) {
	// 	optionList.add({
	// 		"index": i+1,
	// 		"value": useRef(null)
	// 	});
	// }

	const handleEndQuiz = () => {
		console.log('Quiz Ended');
	};

	const next = () => {
		if (isLocked) {
			setCurrentQuestionIndex(currentQuestionIndex+1);
			setCurrentQuestion(quizData[currentQuestionIndex+1]);
			setIsLocked(false);
		}
	}


	const checkAnswer = (e, answer) => {
		if (!isLocked) {
			if (currentQuestion.correct_answer === answer) {
				setScore(prev => prev + 1);
				e.target.classList.add("AnswerButtons_correct__EXfms");
			} else {
				e.target.classList.add("AnswerButtons_incorrect__Blrvc");
			}
			setIsLocked(true)
		}
	}

	return (
		<>
			<QuestionText index={currentQuestionIndex+1} text={currentQuestion.question}/>
			<ScoreContext.Provider value={{ checkAnswer }}>
				<AnswerButtons options={currentQuestion} />
			</ScoreContext.Provider>
			<button className={classes.nextButton} onClick={next}>Next</button>
			<ProgressBar
				current={currentQuestionIndex + 1}
				total={quizData.length}
			/>
		</>
	);
};

export default QuizMain;
