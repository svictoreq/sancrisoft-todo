import React from 'react';

const CheckButton = ({completed, onClick}) => {
	if (completed) {
		return(
			<button className="checkButton completed" onClick={onClick}><i className="fas fa-check"></i></button>
		)
	} else {
		return(
			<button className="checkButton" onClick={onClick}><i className="fas fa-check"></i></button>
		)
	}
};

export default CheckButton;
