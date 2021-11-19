import React from 'react';
import {
	RiDeleteBinLine as DeleteIcon,
	RiCheckboxFill as CheckedIcon,
	RiCheckboxBlankLine as UncheckedIcon,
} from 'react-icons/ri';

import { Text } from '../text';

import { ListWrapper, TodoItem, LeftWrapper } from './style';

const TodoList = ({ todos }) => {
	console.log('todooos:', todos);
	return (
		<ListWrapper>
			{todos.map(todo => (
				<li key={todo.id}>
					<TodoItem>
						<LeftWrapper>
							{todo.completed ? (
								<CheckedIcon
									size='20'
									color='green'
									style={{ marginRight: '10px' }}
								/>
							) : (
								<UncheckedIcon
									size='20'
									color='gray'
									style={{ marginRight: '10px' }}
								/>
							)}
							<Text
								value={todo.title}
								color={todo.completed && 'green'}
								style={todo.completed ? { textDecoration: 'line-through' } : {}}
							/>
						</LeftWrapper>
						<DeleteIcon size='20' />
					</TodoItem>
				</li>
			))}
		</ListWrapper>
	);
};

export default TodoList;
