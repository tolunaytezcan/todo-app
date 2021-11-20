import { useSelector } from 'react-redux';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import { Text } from './components/text';

import { Container, HeaderText } from './AppStyle';

const App = () => {
	const todos = useSelector(state => state.todos);

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
