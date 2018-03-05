import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const TodoForm = ({dispatch}) => {
	let taskInput;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(taskInput.value));
		taskInput.value = '';
	};

	return(
		<form onSubmit={handleSubmit}>
			<input type="text" ref={input => (taskInput = input)} />
			<button type="submit">+ Add TODO</button>
		</form>
	)
};

export default connect()(TodoForm);
