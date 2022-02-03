import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText} from '../../redux/chatPageReduсer';
import { connect } from 'react-redux';
import { withAuthNavigator } from '../../hoc/withAuthNavigator'





let mapStateToProps = (state) => ({
	
	chatPage: state.chatPage,
	newMessageText: state.chatPage.newMessageText,
});
let NavigateWrapperComponent = withAuthNavigator(Dialogs);

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(NavigateWrapperComponent)

export default DialogsContainer;