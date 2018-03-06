import React from 'react';
import EditableTodo from './EditableTodo';
import '../css/Todo.css';

const Todo = ({text, id, completed, editable, handleClick, handleDoubleClick, handleSubmit, handleRemove}) => {
	if (!editable) {
		return(
			<li>
				<button onClick={handleClick}>{completed ? 'Uncomplete' : 'Complete'}</button>
				<span onDoubleClick={handleDoubleClick}>{text}</span>
				<button className="remove-todo" onClick={handleRemove}>
					<i className="far fa-trash-alt"></i>
				</button>
			</li>
		);
	} else {
		return(
			<EditableTodo text={text} id={id} onSubmit={handleSubmit} />
		)
	}
};

export default Todo;
