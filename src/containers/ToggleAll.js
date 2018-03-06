import { connect } from 'react-redux';
import ToggleAllButton from '../components/ToggleAllButton';
import { toggleAll } from '../actions/index';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
	onClick: toggleAll
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAllButton);
