import React from 'react';
import CheckButton from './CheckButton';

const ToggleAllButton = ({onClick, completed}) => {
	return(
		<CheckButton onClick={onClick} completed={completed} />
	)
}

export default ToggleAllButton;
