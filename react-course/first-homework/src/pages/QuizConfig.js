import React, { useState } from 'react';
import NumberInput from '../components/UI/NumberInput';
import SelectInput from '../components/UI/SelectInput';
import './QuizConfig.css';

const QuizConfig = () => {
	const [numQuestions, setNumQuestions] = useState(5);
	const [category, setCategory] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [type, setType] = useState('');
	const [time, setTime] = useState('1m');
	const [darkMode, setDarkMode] = useState(false);

	const handleStartQuiz = () => {
		console.log('Starting quiz with settings:', {
			numQuestions,
			category,
			difficulty,
			type,
			time,
		});
	};

	const handleSeeStats = () => {
		console.log('Navigating to stats screen');
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={`container ${darkMode ? 'dark' : ''}`}>
			<h1 id='quiz-config-text-label'>Quiz Configuration</h1>
			<NumberInput
				value={numQuestions}
				onChange={(e) => setNumQuestions(e.target.value)}
				min={5}
				max={15}
			/>
			<SelectInput
				label="Category"
				options={[
					{ value: '', label: 'Select Category' },
					{ value: 'general', label: 'General Knowledge' },
					{ value: 'science', label: 'Science' },
				]}
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			/>
			<SelectInput
				label="Difficulty"
				options={[
					{ value: '', label: 'Select Difficulty' },
					{ value: 'easy', label: 'Easy' },
					{ value: 'medium', label: 'Medium' },
					{ value: 'hard', label: 'Hard' },
				]}
				value={difficulty}
				onChange={(e) => setDifficulty(e.target.value)}
			/>
			<SelectInput
				label="Type"
				options={[
					{ value: '', label: 'Select Type' },
					{ value: 'multiple', label: 'Multiple Choice' },
					{ value: 'boolean', label: 'True/False' },
				]}
				value={type}
				onChange={(e) => setType(e.target.value)}
			/>
			<SelectInput
				label="Time"
				options={[
					{ value: '1m', label: '1 minute' },
					{ value: '2m', label: '2 minutes' },
					{ value: '5m', label: '5 minutes' },
				]}
				value={time}
				onChange={(e) => setTime(e.target.value)}
			/>
			<div>
				<button onClick={handleStartQuiz} className="button">
					Start Quiz
				</button>
				<button onClick={handleSeeStats} className="button">
					See My Stats
				</button>
			</div>
			<div>
				<button onClick={toggleDarkMode} className="button">
					Toggle Dark Mode
				</button>
			</div>
		</div>
	);
};

export default QuizConfig;
