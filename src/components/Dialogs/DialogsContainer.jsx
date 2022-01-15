import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/chatPageReduсer';
import { connect } from 'react-redux'
let mapStateToProps = (state) => {
	return {
		chatPage: state.chatPage,
		newMessageText: state.chatPage.newMessageText
		
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(addMessageActionCreator())
		},
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextActionCreator(text))
		}
	}
};
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;