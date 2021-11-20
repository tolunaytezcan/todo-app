import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../redux/features/todoSlice';

export const store = configureStore({
	reducer: {
		todos: todoSlice,
	},
});
