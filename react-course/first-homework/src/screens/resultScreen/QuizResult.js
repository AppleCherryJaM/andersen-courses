import React from "react";

import { ADD_STAT } from "../../data/Keywords";
import ButtonInput from "../../components/UI/buttonInput/ButtonInput";
import { useDispatch } from "react-redux";

const QuizResult = ({ questionQuantity, filters }) => {

	const { type, category, difficulty } = filters;
	const dispatch = useDispatch();

	const onRestart = () => {
		dispatch({ type: ADD_STAT, payload: { category, type, difficulty } });
	}

	return <>
		<h2>
			You scored {filters.quizScore} out of {questionQuantity}
		</h2>
		<ButtonInput to="/quizConfig">Start New Game</ButtonInput>
		<ButtonInput to="/quizMain" onClick={onRestart}>Restart</ButtonInput>
	</>
}

export default QuizResult;