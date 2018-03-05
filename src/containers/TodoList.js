import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { completeTodo } from '../actions/index';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
	onButtonClick: completeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
