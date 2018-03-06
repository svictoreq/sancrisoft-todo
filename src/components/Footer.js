import React from 'react';
import Filters from '../containers/Filters';
import ClearCompleted from '../containers/ClearCompleted';

const Footer = (props) => {
	return(
		<section id="filters">
			<div id="filters">
				<Filters filter="ALL" />
				<Filters filter="ACTIVE" />
				<Filters filter="COMPLETED" />
			</div>
			<ClearCompleted />
		</section>
	)
}

export default Footer;
