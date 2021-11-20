import React from 'react';
import {
	RiDeleteBinLine as DeleteIcon,
	RiCheckboxFill as CheckedIcon,
	RiCheckboxBlankLine as UncheckedIcon,
	RiEdit2Fill as EditIcon,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { removeTodo, todoNotCompleted, todoCompleted } from '../../redux/features/todoSlice';
import { Text } from '../text';

import { ListWrapper, TodoItem, LeftWrapper } from './style';

const TodoList = ({ todos }) => {
	const dispatch = useDispatch();

	const onRemove = (e, id) => {
		e.stopPropagation();
		dispatch(removeTodo(id));
	};
	const onEdit = e => {
		e.stopPropagation();
	};

	const toggleCompleted = (id, completed) => {
		completed ? dispatch(todoNotCompleted(id)) : dispatch(todoCompleted(id));
	};

	return (
		<ListWrapper>
			{todos.map(todo => (
				<li key={todo.id}>
					<TodoItem onClick={() => toggleCompleted(todo.id, todo.completed)}>
						<LeftWrapper>
							{todo.completed ? (
								<>
									<CheckedIcon
										size='20'
										color='green'
										style={{ marginRight: '10px', minWidth: '30px' }}
									/>
									<Text
										value={todo.title}
										color='green'
										style={{ textDecoration: 'line-through' }}
									/>
								</>
							) : (
								<>
									<UncheckedIcon
										size='20'
										color='gray'
										style={{ marginRight: '10px', minWidth: '30px' }}
									/>
									<Text value={todo.title} color='primary' />
								</>
							)}
						</LeftWrapper>
						<div>
							<EditIcon
								size='20'
								style={{ minWidth: '30px' }}
								onClick={e => onEdit(e, todo.id)}
							/>
							<DeleteIcon
								size='20'
								style={{ minWidth: '30px' }}
								onClick={e => onRemove(e, todo.id)}
							/>
						</div>
					</TodoItem>
				</li>
			))}
		</ListWrapper>
	);
};

export default TodoList;
