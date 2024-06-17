import React, {useContext, useState} from 'react';
import NumberInput from '../../components/UI/numberInput/NumberInput';
import SelectInput from '../../components/UI/selectInput/SelectInput';
import ButtonInput from '../../components/UI/buttonInput/ButtonInput';

import './QuizConfig.css';

const QuizConfig = ({ categories, types, setTime, setFilters }) => {
	
	let typesOptions = [];
	for (let i = 0; i < types.length; i++) {
		typesOptions.push({
			value: types[i],
			label: types[i]
		});
	}

	let categoriesOptions = [];
	for (let i = 0; i < categories.length; i++) {
		categoriesOptions.push({
			value: categories[i],
			label: categories[i]
		});
	}

	const [numQuestions, setNumQuestions] = useState(5);
	const [category, setCategory] = useState(categoriesOptions[0].value);
	const [difficulty, setDifficulty] = useState('Easy');
	const [type, setType] = useState(typesOptions[0].value);

	const handleSeeStats = () => {
		console.log('Navigating to stats screen');
	};

	console.log("Object: " + type);
	return (
		<div>
			<h1 id='quiz-config-text-label'>Quiz Configuration</h1>
			<NumberInput
				value={numQuestions}
				onChange={(e) => setNumQuestions(e.target.value)}
				min={5}
				max={15}
			/>
			<SelectInput
				label="Category"
				options={categoriesOptions}
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			/>
			<SelectInput
				label="Difficulty"
				options={[
					{ value: 'easy', label: 'Easy' },
					{ value: 'medium', label: 'Medium' },
					{ value: 'hard', label: 'Hard' },
				]}
				value={difficulty}
				onChange={(e) => setDifficulty(e.target.value)}
			/>
			<SelectInput
				label="Type"
				options={typesOptions}
				value={type}
				onChange={(e) => setType(e.target.value)}
			/>
			<SelectInput
				label="Time"
				options={[
					{ value: 1, label: '1 minute' },
					{ value: 2, label: '2 minutes' },
					{ value: 5, label: '5 minutes' },
				]}
				onChange={(e) => setTime(e.target.value)}
			/>
			<div>
				<ButtonInput to={"/quizMain"} onClick={(e) => setFilters({
					category, type, difficulty
				})} className="button">
					Start Quiz
				</ButtonInput>
				<ButtonInput onClick={handleSeeStats} className="button">
					See My Stats
				</ButtonInput>
			</div>
			{/* <div>
				<button onClick={toggleDarkMode} className="button">
					Toggle Dark Mode
				</button>
			</div> */}
		</div>
	);
};

export default QuizConfig;
