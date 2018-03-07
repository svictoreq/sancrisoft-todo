import React from 'react';
import CheckButton from './CheckButton';

const EditableTodo = ({text, id, completed, onSubmit, onClick, onRemove}) => {
	let editInput;
	const handleSubmit = (e) => {
		if (editInput.value) {
			e.preventDefault();
			onSubmit(editInput.value, id);
		} else {
			e.preventDefault();
			onSubmit(text, id);
		}
	};

	return (
		<li>
			<CheckButton onClick={onClick} completed={completed} />
			<form onSubmit={handleSubmit}>
				<input type="text" defaultValue={text} ref={input => editInput = input} />
			</form>
			<button className="remove-todo" onClick={onRemove}>
					<i className="far fa-trash-alt"></i>
				</button>
		</li>
	)
};

export default EditableTodo;
