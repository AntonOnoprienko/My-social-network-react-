import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/chatPageReduсer';

const DialogsContainer = (props) => {
	
	let state = props.store.getState().chatPage;
	
	let addMessage = () => {
		 props.store.dispatch(addMessageActionCreator()); }

	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text))
	};

	return (
		<Dialogs
			updateNewMessageText={onMessageChange}
			sendMessage={addMessage}
			chatPage={state}
			newMessageText={state.newMessageText} />
	)
};
export default DialogsContainer;
