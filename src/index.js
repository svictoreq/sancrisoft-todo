import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './components/App';
import { todos } from './reducers/todos'
import registerServiceWorker from './registerServiceWorker';

const initialState = {
	todos: []
}
const store = createStore(todos, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
