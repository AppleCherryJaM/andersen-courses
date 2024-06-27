import { configureStore } from '@reduxjs/toolkit'
//import quizReducer from "../slices/ScoreSlice";
import { mainReducer } from '../reducers/MainReducer';

export const quizStore = configureStore({
	reducer: {
		quiz: mainReducer
	}
})