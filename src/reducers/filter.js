export function filter(state = "ALL", action) {
	switch(action.type) {
		case 'SET_FILTER':
			return action.filter;

		default:
			return state;
	}
}
