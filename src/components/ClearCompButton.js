import React from 'react';

const ClearCompButton = ({completedTodos, onClick}) => {
	return(
		<button onClick={onClick}>CLEAR COMPLETED ({completedTodos})</button>
	)
};

export default ClearCompButton;
