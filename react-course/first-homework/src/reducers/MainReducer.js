import { initialState } from "../slices/ScoreSlice"

import { ADD_STAT, GET_BY_TYPE, GET_BY_DIFFICULTY, GET_BY_CATEGORY, INCREMENT_SCORE, GET_CURRENT_SCORE } from "../data/Keywords"

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STAT:
			let newStat = [...state.statistics];
			newStat.push({...action.payload, quizScore: Number(0)})
			return { ...state, statistics: newStat}
		case GET_BY_TYPE:
			break
		case GET_BY_DIFFICULTY:
			break;
		case GET_BY_CATEGORY:
			break;
		case INCREMENT_SCORE: 
			const newStatistics = [...state.statistics];
			let newScore = 0;
			if (newStatistics.length > 0) {
				newScore = state.statistics[newStatistics.length-1].quizScore + action.payload
				newStatistics[newStatistics.length - 1] = {
					...state.statistics[newStatistics.length - 1],
					quizScore: newScore
				}
			} else {
				newScore = state.statistics[0].quizScore + action.payload
				newStatistics[0] = {
					...state.statistics[0], 
					quizScore: newScore
				};
			}
			return {...state, statistics: newStatistics}
		case GET_CURRENT_SCORE: 
			return state.statistics[state.statistics.length - 1].quizScore
		default:
			return state
	}
}