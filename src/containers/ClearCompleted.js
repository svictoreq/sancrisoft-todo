import { connect } from 'react-redux';
import { clearCompleted } from '../actions/index';
import ClearCompButton from '../components/ClearCompButton';

const mapStateToProps = ({todos}) => ({
	completedTodos: todos.filter(todo => todo.completed).length
});

const mapDispatchToProps = {
	onClick: clearCompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearCompButton);
