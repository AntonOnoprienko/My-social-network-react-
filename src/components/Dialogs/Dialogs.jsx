import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/chatPageReduser';

const Dialogs = (props) => {
	let dialogsElements = props.chatPage.dialogsData.map ( d => <DialogItem id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = props.chatPage.messagesData.map ( m => <Message message={  m.message} url={ m.url }/> )
	
	let addMessage = () => {
		props.dispatch(addMessageActionCreator())
		

	}
	let onMessageChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewMessageTextActionCreator(text))
	}
	


	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					{ dialogsElements }
			</div>
			

			<div className= {classes.messages }>
				{messagesElements}
				<textarea  placeholder='Enter your message' onChange={onMessageChange} value={ props.chatPage.newMessageText} />
				<button onClick={ addMessage }>send message </button>
			</div>
			
			
		</div>
	)
}

export default Dialogs;
