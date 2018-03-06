export function todos(state = [], action) {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, action.todo];

		case 'COMPLETE_TODO':
			return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);

		case 'EDIT_TODO':
			return state.map(todo => todo.id === action.id ? {...todo, editable: !todo.editable} : todo);

		case 'REMOVE_TODO':
			return state.filter(todo => !(todo.id === action.id));

		case 'ASSIGN_TEXT':
			return state.map(todo => (todo.id === action.id ? {...todo, editable: !todo.editable, text: action.text}
				: todo));

		case 'CLEAR_COMPLETED':
			return state.filter(todo => (todo.completed === false));

		default:
			return state;
	}
}
