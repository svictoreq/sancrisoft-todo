import React from 'react';
import Filters from '../containers/Filters';
import ClearCompleted from '../containers/ClearCompleted';

const Footer = (props) => {
	return(
		<footer>
			<div id="filters">
				<Filters filter="ALL" />
				<Filters filter="PENDING" />
				<Filters filter="COMPLETED" />
			</div>
			<ClearCompleted />
		</footer>
	)
}

export default Footer;
