import React, { useEffect, useRef, useState } from 'react';
import {
	RiDeleteBinLine as DeleteIcon,
	RiCheckboxFill as CheckedIcon,
	RiCheckboxBlankLine as UncheckedIcon,
	RiEdit2Fill as EditIcon,
	RiCheckboxCircleFill as DoneIcon,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import {
	removeTodo,
	todoNotCompleted,
	todoCompleted,
	editTodo,
} from '../../redux/features/todoSlice';
import { Text } from '../text';

import { TodoItem, LeftWrapper, ListInput, TextContainer } from './style';

const Todo = ({ todo }) => {
	const dispatch = useDispatch();
	const { id, title, completed } = todo;

	const inputRef = useRef(null);

	const [editable, setEditable] = useState(false);
	const [editValue, setEditValue] = useState(title);

	useEffect(() => {
		if (editable) {
			inputRef.current.focus();
		}
	}, [editable]);

	const onRemove = () => {
		dispatch(removeTodo(id));
	};

	const onEdit = () => {
		if (editValue !== '') {
			dispatch(editTodo({ id, title: editValue, completed }));
			setEditable(false);
		} else {
			alert('The title field cannot be empty.');
		}
	};

	const toggleCompleted = () => {
		completed ? dispatch(todoNotCompleted(id)) : dispatch(todoCompleted(id));
	};

	const editMode = () => {
		setEditable(true);
	};

	const enterSubmit = e => {
		if (e.key === 'Enter') {
			onEdit();
		}
	};

	return (
		<TodoItem>
			<LeftWrapper>
				{completed ? (
					<CheckedIcon
						size='20'
						color='green'
						style={{ marginRight: '10px', minWidth: '30px' }}
						onClick={toggleCompleted}
					/>
				) : (
					<UncheckedIcon
						size='20'
						color='gray'
						style={{ marginRight: '10px', minWidth: '30px' }}
						onClick={toggleCompleted}
					/>
				)}
				{editable ? (
					<ListInput
						name='title'
						value={editValue}
						onKeyPress={enterSubmit}
						ref={inputRef}
						onChange={e => setEditValue(e.target.value)}
						checked={completed}
					/>
				) : (
					<TextContainer onDoubleClick={editMode}>
						<Text
							value={title}
							color={completed ? 'green' : 'primary'}
							style={{
								textDecoration: completed ? 'line-through' : 'none',
							}}
						/>
					</TextContainer>
				)}
			</LeftWrapper>
			<div>
				{editable ? (
					<DoneIcon size='20' style={{ minWidth: '30px' }} onClick={onEdit} />
				) : (
					<EditIcon size='20' style={{ minWidth: '30px' }} onClick={editMode} />
				)}
				<DeleteIcon size='20' style={{ minWidth: '30px' }} onClick={onRemove} />
			</div>
		</TodoItem>
	);
};

export default Todo;
