import React, { Component, Fragment } from 'react';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
    	<Fragment>
	      <TodoForm />
	      <TodoList />
      </Fragment>
    );
  }
}

export default App;
