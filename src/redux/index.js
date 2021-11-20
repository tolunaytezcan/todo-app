import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todoSlice from './features/todoSlice';

const reducer = combineReducers({
	root: todoSlice.reducer,
});

export const store = configureStore({
	reducer: reducer,
});
