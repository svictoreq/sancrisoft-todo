import { connect } from 'react-redux';
import { setFilter } from '../actions/index';
import Filter from '../components/Filter';

const mapStateToProps = (state, ownProps) => {
	return {
		curFilter: state.filter
	}
}

const mapDispatchToProps = {
	onClick: setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
