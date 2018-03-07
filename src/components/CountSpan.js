import React from 'react';

const CountSpan = ({count}) => {
	if (count === 1) {
		return(
			<span>{count} todo pending</span>
		)
	} else {
		return(
			<span>{count} todos pending</span>
		)
	}
};

export default CountSpan;
