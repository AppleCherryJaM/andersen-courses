import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
	statistics: []
}

export const quizSlice = createSlice({
	name: 'scoreCounter',
	initialState,
	reducers: {
		incrementScore: (state, action) => {
			state.statistics[state.statistics.length - 1].quizScore += action.payload
		},
		setNewStatElement: (state, type, difficulty, category) => {
			if (state.statistics.length < 1) {
				return {...state, statistics: [{
					type, difficulty, category, quizScore: 0
				}]}
			}
			return { ...state, statistics: [...state.statistics, { type, difficulty, category }]}
		},
		getStat: (state) => {
			let scoreList = [];
			state.statistics.forEach(element => scoreList.push(element.quizScore));
			return scoreList;
		},
		getStatByType: (state, type) => {
			let scoreList = [];
			state.statistics.forEach(element => {
				element.type === type && scoreList.push(element.quizScore)
			});
			return scoreList;
		},
		getStatByDifficulty: (state, difficulty) => {
			let scoreList = [];
			state.statistics.forEach(element => {
				element.difficulty === difficulty && scoreList.push(element.quizScore)
			});
			return scoreList;
		},
		getStatByCategory: (state, category) => {
			let scoreList = [];
			state.statistics.forEach(element => {
				element.category === category && scoreList.push(element.quizScore)
			});
			return scoreList;
		},
	},
})

// Action creators are generated for each case reducer function
export const { 
	incrementScore, 
	setNewStatElement, 
	getStat, 
	getStatByType, 
	getStatByDifficulty, 
	getStatByCategory 
} = quizSlice.actions

export default quizSlice.reducer