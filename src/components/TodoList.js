import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onButtonClick}) => {
	return(
		<ul>
			{todos.map(todo => (
				<Todo
				key={todo.id}
				id={todo.id}
				text={todo.text}
				completed={todo.completed}
				onClick={() => onButtonClick(todo.id)} />
			))}
		</ul>
	)
};

export default TodoList;
