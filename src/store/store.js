import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quiz-slice';
export const store = configureStore({
	reducer: { quiz: quizReducer },
});
