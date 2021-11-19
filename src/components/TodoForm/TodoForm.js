import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../features/todoSlice';

import { InputWrapper, TodoInput, AddButton } from './style';

const TodoForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');

	const onSave = () => {
		if (title === '') {
			alert('Lütfen bir todo giriniz!');
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
				onChange={e => setTitle(e.currentTarget.value)}
			/>
			<AddButton onClick={onSave}>Save Todo</AddButton>
		</InputWrapper>
	);
};

export default TodoForm;