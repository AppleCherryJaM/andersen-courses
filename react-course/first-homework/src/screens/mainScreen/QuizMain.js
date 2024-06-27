import React, { useState } from 'react';
import QuestionText from '../../components/questionText/QuestionText';
import ProgressBar from '../../components/progressBar/ProgressBar';
import AnswerButtons from '../../components/answerButtons/AnswerButtons';
import ButtonInput from '../../components/UI/buttonInput/ButtonInput';
import Timer from '../../components/timer/Timer';
import { QuizContext } from '../../context/QuizContext';
import QuizError from '../errorScreen/QuizError';
import { INCREMENT_SCORE } from "../../data/Keywords"


import classes from './QuizMain.module.css';
import { useDispatch } from 'react-redux';

const QuizMain = ({ time, quizData, setIsEnd }) => {
	const dispatch = useDispatch();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(quizData[currentQuestionIndex]);
	const [isLocked, setIsLocked] = useState(false);

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
				dispatch({type: INCREMENT_SCORE, payload: 1});
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
				<Timer min={time} setIsEnd={setIsEnd}/>
				<QuestionText index={currentQuestionIndex + 1} text={currentQuestion.question} />
				<QuizContext.Provider value={{ checkAnswer }}>
					<AnswerButtons options={currentQuestion} isLocked={isLocked} />
				</QuizContext.Provider>
				{currentQuestionIndex < quizData.length - 1 && 
					<div className={classes.btnContainer}>
						<ButtonInput to='/quizResult'>End Quiz</ButtonInput>
						<button onClick={next} className={classes.nextButton}>Next</button>
					</div>
				}
				{currentQuestionIndex === quizData.length - 1 &&
					<div className={classes.btnContainer}>
						<ButtonInput to='/quizResult' className={`${classes.nextButton} ${classes.endButton}`}>End Quiz</ButtonInput>
					</div>
				}
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
