import React from 'react';
import Filters from '../containers/Filters';
import ClearCompleted from '../containers/ClearCompleted';
import PendingCount from '../containers/PendingCount';

const Footer = (props) => {
	return(
		<footer>
			<PendingCount />
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
