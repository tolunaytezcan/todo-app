import { useDispatch } from 'react-redux';

import { Text } from '../text';

import {
	deleteAllTodos,
	deleteCompletedTodos,
	markAllCompletedTodos,
} from '../../redux/features/todoSlice';

import { Button } from '../../AppStyle';

const FilterTodos = ({ todos }) => {
	const dispatch = useDispatch();

	const deleteAll = () => {
		dispatch(deleteAllTodos());
	};
	const deleteCompleted = () => {
		dispatch(deleteCompletedTodos());
	};
	const markAllCompleted = () => {
		dispatch(markAllCompletedTodos());
	};

	return (
		<>
			<Text
				value={`Todo count: ${todos.length} `}
				color='primary'
				style={{ marginRight: '10px' }}
			/>
			<Text
				value={`Todo Completed: ${todos.filter(todo => todo.completed).length} `}
				color='green'
			/>

			<Button onClick={deleteAll}>Delete All Todos</Button>
			<Button onClick={deleteCompleted}>Delete Completed Todos</Button>
			<Button onClick={markAllCompleted}>All Todos Completed</Button>
		</>
	);
};

export default FilterTodos;
