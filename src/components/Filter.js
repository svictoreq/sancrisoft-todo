import React from 'react';

const Filter = ({filter, onClick, curFilter}) => {
	if (filter === curFilter) {
		return(
			<button style={{color: '#1292ff'}} onClick={() => onClick(filter)}>{filter}</button>
		)
	} else {
		return(
			<button onClick={() => onClick(filter)}>{filter}</button>
		)
	}
}

export default Filter;
