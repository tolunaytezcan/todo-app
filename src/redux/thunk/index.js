import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

export const getTodos = createAsyncThunk('getTodos', async () => {
	const response = await api.get('/todos');

	return response.data;
});
