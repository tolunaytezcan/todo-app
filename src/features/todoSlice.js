import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = [];

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const tmpTodo = { id: v4(), title: action.payload, completed: false };
			state.push(tmpTodo);
		},
		removeTodo: (state, action) => {
			state.splice(
				state.findIndex(todo => todo.id === action.payload),
				1,
			);
		},
		todoCompleted: (state, action) => {
			const todo = state.find(todo => todo.id === action.payload);
			todo.completed = true;
		},
		todoNotCompleted: (state, action) => {
			const todo = state.find(todo => todo.id === action.payload);
			todo.completed = false;
		},
	},
});

export const { addTodo, removeTodo, todoCompleted, todoNotCompleted } = todoSlice.actions;
export default todoSlice.reducer;
