export const addTodo = (text) => ({
	type: 'ADD_TODO',
	todo: {
		completed: false,
		id: Date.now(),
		text
	}
});

export const completeTodo = (id) => ({
	type: 'COMPLETE_TODO',
	id
});
