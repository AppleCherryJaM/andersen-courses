import React, { useState, useRef } from 'react';
// import { Questions as quizData } from '../../data/Questions';
import QuestionText from '../../components/questionText/QuestionText';
import ProgressBar from '../../components/progressBar/ProgressBar';
import AnswerButtons from '../../components/answerButtons/AnswerButtons';
// import ButtonInput from '../../components/UI/buttonInput/ButtonInput';
// import Timer from '../../components/timer/Timer';
import { QuizContext } from '../../context/QuizContext';
import QuizError from '../errorScreen/QuizError';

import classes from './QuizMain.module.css';

const QuizMain = ({time, quizData}) => {
	console.log("QuizData: ", quizData);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0); 
	const [currentQuestion, setCurrentQuestion] = useState(quizData[currentQuestionIndex]);
	const [isLocked, setIsLocked] = useState(false);
	const [isEnd, setIsEnd] = useState(false);
	
	const handleEndQuiz = () => {
		
	};

	const next = () => {
		if (isLocked) {
			if (currentQuestionIndex === quizData.length - 1) {
				setIsEnd(true);
				return;
			}
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
	
	if (quizData.length > 0) {
		return (
			<>
				<QuestionText index={currentQuestionIndex + 1} text={currentQuestion.question} />
				<QuizContext.Provider value={{ checkAnswer }}>
					<AnswerButtons options={currentQuestion} isLocked={isLocked} />
				</QuizContext.Provider>
				<button className={classes.nextButton} onClick={next}>Next</button>
				<ProgressBar
					current={currentQuestionIndex + 1}
					total={quizData.length}
				/>
				{/* <div>Hueta</div> */}
			</>
		);
	} else {
		return <>
			<QuizError/>
		</>
		
	}
};

export default QuizMain;
