import React, { Component, Fragment } from 'react';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
    	<Fragment>
	      <TodoForm />
	      <TodoList />
	      <Footer />
      </Fragment>
    );
  }
}

export default App;
