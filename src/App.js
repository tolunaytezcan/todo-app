import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import { Text } from './components/text';

import { getTodos } from './redux/thunk';

import { Container, HeaderText } from './AppStyle';

const App = () => {
	const todos = useSelector(state => state.todos.todos, shallowEqual);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, []);

	return (
		<Container>
			<HeaderText>Getir Todo App</HeaderText>

			<TodoForm />

			{todos.length > 0 ? (
				<TodoList todos={todos} />
			) : (
				<Text
					value='Please add items to your todo list.'
					color='primary'
					style={{ marginTop: '70px' }}
				/>
			)}
		</Container>
	);
};

export default App;
