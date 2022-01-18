import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {
	let dialogsElements = props.chatPage.dialogsData.map(d => <DialogItem key={d.id} id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = props.chatPage.messagesData.map(m => <Message key={m.id} message={  m.message} url={ m.url }/> )

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
				<textarea  placeholder='Enter your message' onChange={onMessageChange} value={ props.newMessageText } />
				<button onClick={ onSendMessageClick }>send message </button>
			</div>
			
			
		</div>
	)
}

export default Dialogs;
