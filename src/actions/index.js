// Todos Actions

export const addTodo = (text) => ({
	type: 'ADD_TODO',
	todo: {
		completed: false,
		id: Date.now(),
		editable: false,
		text
	}
});

export const completeTodo = (id) => ({
	type: 'COMPLETE_TODO',
	id
});


export const assignText = (text, id) => ({
	type: 'ASSIGN_TEXT',
	text,
	id
})

export const editTodo = (id) => ({
	type: 'EDIT_TODO',
	id
});

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id
});

// Filter Actions

export const setFilter = (filter) => ({
	type: 'SET_FILTER',
	filter
});
