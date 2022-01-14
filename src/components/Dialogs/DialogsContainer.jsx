import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/chatPageReduсer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
	
	//let state = props.store.getState().chatPage;
	
	//let addMessage = () => {
	//	props.store.dispatch(addMessageActionCreator());
	//}

	//let onMessageChange = (text) => {
	//	props.store.dispatch(updateNewMessageTextActionCreator(text))
	//};

	return (
		<StoreContext.Consumer>
			{
			(store) => {
				let state = store.getState().chatPage;
				let addMessage = () => {
					store.dispatch(addMessageActionCreator());
				}

				let onMessageChange = (text) => {
					store.dispatch(updateNewMessageTextActionCreator(text))
				};
				
				return (
					<Dialogs
						updateNewMessageText={onMessageChange}
						sendMessage={addMessage}
						chatPage={state}
						newMessageText={state.newMessageText} />
				)
			}
		}
		</StoreContext.Consumer>
		
	)
};
export default DialogsContainer;
