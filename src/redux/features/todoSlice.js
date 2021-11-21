import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { getTodos } from '../thunk';

const initialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const tmpTodo = { id: v4(), title: action.payload, completed: false };
			state.todos.unshift(tmpTodo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		todoCompleted: (state, action) => {
			const todo = state.todos.find(todo => todo.id === action.payload);
			todo.completed = true;
		},
		todoNotCompleted: (state, action) => {
			const todo = state.todos.find(todo => todo.id === action.payload);
			todo.completed = false;
		},
		editTodo: (state, action) => {
			const todo = state.todos.find(todo => todo.id === action.payload.id);
			todo.title = action.payload.title;
		},
		deleteAllTodos: state => {
			state.todos = [];
		},
		deleteCompletedTodos: state => {
			state.todos = state.todos.filter(todo => !todo.completed);
		},
		markAllCompletedTodos: state => {
			state.todos.forEach(todo => (todo.completed = true));
		},
	},

	extraReducers: builder => {
		builder.addCase(getTodos.fulfilled, (state, action) => {
			state.todos = [...state.todos, ...action.payload];
		});
	},
});

export const {
	addTodo,
	removeTodo,
	todoCompleted,
	todoNotCompleted,
	editTodo,
	deleteAllTodos,
	deleteCompletedTodos,
	markAllCompletedTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
