import React, { Component, Fragment } from 'react';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
    	<Fragment>
    		<header>
	      	<TodoForm />
	      </header>
	      <main>
	      	<TodoList />
	      </main>
	      <Footer />
      </Fragment>
    );
  }
}

export default App;
