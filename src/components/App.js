import React, { Component, Fragment } from 'react';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
import FiltersSection from '../components/FiltersSection'

class App extends Component {
  render() {
    return (
    	<Fragment>
	      <TodoForm />
	      <TodoList />
	      <FiltersSection />
      </Fragment>
    );
  }
}

export default App;
