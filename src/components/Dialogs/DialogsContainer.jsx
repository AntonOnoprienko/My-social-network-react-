import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/chatPageReduсer';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
	chatPage: state.chatPage,
	newMessageText: state.chatPage.newMessageText,
});



export default compose(
	connect(mapStateToProps, {sendMessage}),
	//withAuthNavigator (Перевод на страницу Логин если пользователь не авторизирован)
)(Dialogs);