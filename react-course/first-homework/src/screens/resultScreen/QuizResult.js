import React from "react";

const QuizResult = ({ score, questionQuantity }) => {
	return <>
		<h2>
			You scored {score} out of {questionQuantity}
		</h2>
		<button>Start New Game</button>
		<button>Restart</button>
	</>
}

export default QuizResult;