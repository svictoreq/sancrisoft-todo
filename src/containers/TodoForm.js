import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import ToggleAll from '../containers/ToggleAll';

const TodoForm = ({dispatch}) => {
	let taskInput;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(taskInput.value));
		taskInput.value = '';
	};

	return(
		<Fragment>
			<ToggleAll />
			<form onSubmit={handleSubmit}>
				<input type="text" ref={input => (taskInput = input)} />
				<button type="submit">+ Add TODO</button>
			</form>
		</Fragment>
	)
};

export default connect()(TodoForm);
