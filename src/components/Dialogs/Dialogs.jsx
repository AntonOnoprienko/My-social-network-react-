import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {
	let state = props.chatPage
	let dialogsElements = state.dialogsData.map ( d => <DialogItem id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = state.messagesData.map ( m => <Message message={  m.message} url={ m.url }/> )
	let newMessageBody = state.newMessageText;

	let onSendMessageClick = () => {
		props.sendMessage()
	}
	
	let onMessageChange = (e) => {
	let text = e.target.value
	props.updateNewMessageText(text)
	}
	

	return (

		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					{ dialogsElements }
			</div>
			

			<div className= {classes.messages }>
				{messagesElements}
				<textarea  placeholder='Enter your message' onChange={onMessageChange} value={ newMessageBody } />
				<button onClick={ onSendMessageClick }>send message </button>
			</div>
			
			
		</div>
	)
}

export default Dialogs;
