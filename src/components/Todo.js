import React from 'react';

const Todo = ({text, id, completed, onClick, dispatch}) => (
	<li onClick={onClick}>
		<button>{completed ? 'Uncomplete' : 'Complete'}</button>
		<span>{text}</span>
	</li>
);

export default Todo;
