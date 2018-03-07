import React from 'react';

const ClearCompButton = ({completedTodos, onClick}) => {
	return(
		<button id="clear-completed" onClick={onClick}>Clear Completed ({completedTodos})</button>
	)
};

export default ClearCompButton;
