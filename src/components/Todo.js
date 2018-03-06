import React from 'react';
import EditableTodo from './EditableTodo';

const Todo = ({text, id, completed, editable, handleClick, handleDoubleClick, handleSubmit}) => {
	if (!editable) {
		return(
			<li>
				<button onClick={handleClick}>{completed ? 'Uncomplete' : 'Complete'}</button>
				<span onDoubleClick={handleDoubleClick}>{text}</span>
			</li>
		);
	} else {
		return(
			<EditableTodo text={text} id={id} onSubmit={handleSubmit} />
		)
	}
};

export default Todo;
