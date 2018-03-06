export function todos(state = [], action) {
	switch(action.type) {
		case 'ADD_TODO':
			return {...state, todos: [...state.todos, action.todo]};

		case 'COMPLETE_TODO':
			return {...state,
				todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)}

		case 'EDIT_TODO':
			return {...state, todos: state.todos.map(todo => (
				todo.id === action.id ? {...todo, editable: !todo.editable} : todo
			))}

		case 'ASSIGN_TEXT':
			return {...state, todos: state.todos.map(todo => (
				todo.id === action.id ? {...todo, editable: !todo.editable, text: action.text} : todo
			))}

		default:
			return state;
	}
}
