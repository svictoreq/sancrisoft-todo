import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { completeTodo, assignText, editTodo, removeTodo } from '../actions/index';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
	onButtonClick: completeTodo,
	onDoubleClick: editTodo,
	onEditSubmit: assignText,
	onRemoveClick: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
