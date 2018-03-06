import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { completeTodo } from '../actions/index';
import { assignText } from '../actions/index';
import { editTodo } from '../actions/index';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
	onButtonClick: completeTodo,
	onDoubleClick: editTodo,
	onEditSubmit: assignText
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
