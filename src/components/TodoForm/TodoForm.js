import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../features/todoSlice';

import { InputWrapper, TodoInput, AddButton } from './style';

const TodoForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');

	const onSave = () => {
		if (title === '') {
			alert('The input title is required!');
			return;
		}

		dispatch(addTodo(title));
		setTitle('');
	};

	const enterSubmit = e => {
		if (e.key === 'Enter') {
			onSave();
		}
	};

	return (
		<InputWrapper>
			<TodoInput
				name='title'
				value={title}
				onKeyPress={enterSubmit}
				placeholder='Add a new todo and press enter or save button.'
				onChange={e => setTitle(e.currentTarget.value)}
			/>
			<AddButton onClick={onSave}>Save Todo</AddButton>
		</InputWrapper>
	);
};

export default TodoForm;
