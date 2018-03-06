import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onButtonClick, onDoubleClick, onEditSubmit, onRemoveClick}) => {
	return(
		<ul>
			{todos.map(todo => (
				<Todo
				key={todo.id}
				id={todo.id}
				text={todo.text}
				completed={todo.completed}
				editable={todo.editable}
				handleClick={() => onButtonClick(todo.id)}
				handleDoubleClick={() => onDoubleClick(todo.id)}
				handleRemove={() => onRemoveClick(todo.id)}
				handleSubmit={onEditSubmit} />
			))}
		</ul>
	)
};

export default TodoList;
