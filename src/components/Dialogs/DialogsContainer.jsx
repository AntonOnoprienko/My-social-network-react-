import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/chatPageReduсer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigator } from '../../hoc/withAuthNavigator'

let mapStateToProps = (state) => ({
	chatPage: state.chatPage,
	newMessageText: state.chatPage.newMessageText,
});



export default compose(
	withAuthNavigator,
	connect(mapStateToProps, { sendMessage }))(Dialogs);