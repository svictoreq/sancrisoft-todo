import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { completeTodo, assignText, editTodo, removeTodo } from '../actions/index';

const mapStateToProps = (state) => {
	let visible: [];
	switch(state.filter) {
		case 'ALL':
			return state;

		case 'ACTIVE':
			visible = state.todos.filter(todo => !todo.completed);
			return {...state, todos: visible};

		case 'COMPLETED':
			visible = state.todos.filter(todo => todo.completed);
			return {...state, todos: visible};
	}
};

const mapDispatchToProps = {
	onButtonClick: completeTodo,
	onDoubleClick: editTodo,
	onEditSubmit: assignText,
	onRemoveClick: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
