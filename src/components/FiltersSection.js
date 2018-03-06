import React from 'react';
import Filters from '../containers/Filters';

const FiltersSection = (props) => {
	return(
		<section id="filters">
			<Filters filter="ALL" />
			<Filters filter="ACTIVE" />
			<Filters filter="COMPLETED" />
		</section>
	)
}

export default FiltersSection;
