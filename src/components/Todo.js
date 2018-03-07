import React from 'react';
import EditableTodo from './EditableTodo';
import CheckButton from './CheckButton';

const Todo = ({text, id, completed, editable, handleClick, handleDoubleClick, handleSubmit, handleRemove}) => {
	const setStyle = () => {
		if (completed) {
			return {
				textDecoration: 'line-through',
				color: '#9e9e9e',
				fontStyle: 'italic'
			}
		} else {
			return {}
		}
	}

	if (!editable) {
		return(
			<li>
				<CheckButton onClick={handleClick} completed={completed} />
				<span onDoubleClick={handleDoubleClick} style={setStyle()}>{text}</span>
				<button className="remove-todo" onClick={handleRemove}>
					<i className="far fa-trash-alt"></i>
				</button>
			</li>
		);
	} else {
		return(
			<EditableTodo text={text} id={id} onSubmit={handleSubmit} onClick={handleClick} completed={completed} onRemove={handleRemove} />
		)
	}
};

export default Todo;
