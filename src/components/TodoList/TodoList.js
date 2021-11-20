import Todo from '../Todo/Todo';

import { ListWrapper } from './style';

const TodoList = ({ todos }) => {
	return (
		<ListWrapper>
			{todos.map(todo => (
				<li key={todo.id}>
					<Todo todo={todo} />
				</li>
			))}
		</ListWrapper>
	);
};

export default TodoList;
