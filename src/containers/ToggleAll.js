import { connect } from 'react-redux';
import ToggleAllButton from '../components/ToggleAllButton';
import { toggleAll } from '../actions/index';

const mapStateToProps = ({todos}) => {
	if (todos.length) {
		return {
			completed: todos.every(todo => todo.completed)
		}
	} else {
		return {completed: false};
	}
};

const mapDispatchToProps = {
	onClick: toggleAll
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAllButton);
