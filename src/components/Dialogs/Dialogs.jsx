import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogsData.map ( d => <DialogItem id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = props.state.messagesData.map ( m => <Message message={  m.message} url={ m.url }/> )
	
	let sendMessage = () => {
		let text = addMessageElement.current.value;
		alert(text);
	}

	let addMessageElement = React.createRef();


	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					{ dialogsElements }
			</div>
			

			<div className= {classes.messages }>
				{messagesElements}
				<textarea ref={addMessageElement} />
				<button onClick={ sendMessage }>send message </button>
			</div>
			
			
		</div>
	)
}

export default Dialogs;
