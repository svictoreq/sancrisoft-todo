import React from 'react';

const EditableTodo = ({text, id, onSubmit}) => {
	let editInput;
	const handleSubmit = (e) => {
		onSubmit(editInput.value, id);
	};

	return (
		<li>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder={text} ref={input => editInput = input} />
			</form>
		</li>
	)
};

export default EditableTodo;
