import { useSelector } from 'react-redux';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import { Container, HeaderText } from './AppStyle';

const App = () => {
	const todos = useSelector(state => state.todos);

	return (
		<Container>
			<HeaderText>Getir Todo App</HeaderText>
			<TodoForm />
			<TodoList todos={todos} />
		</Container>
	);
};

export default App;
