import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText} from '../../redux/chatPageReduсer';
import { connect } from 'react-redux';
import { withAuthNavigator } from '../../hoc/withAuthNavigator'
import { compose } from 'redux';

let mapStateToProps = (state) => ({
	chatPage: state.chatPage,
	newMessageText: state.chatPage.newMessageText,
});

export default compose(
	connect(mapStateToProps, { sendMessage, updateNewMessageText }),
	//withAuthNavigator
)(Dialogs);