import { connect } from 'react-redux';
import CountSpan from '../components/CountSpan';

const mapStateToProps = ({todos}) => ({
	count: todos.filter(todo => !todo.completed).length
});

export default connect(mapStateToProps)(CountSpan);
