import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';
import { Field,reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../utils/validators/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';

let maxLenth40 = maxLenghtCreator(40);

const Dialogs = (props) => {
	let dialogsElements = props.chatPage.dialogsData.map(d => <DialogItem key={d.id} id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = props.chatPage.messagesData.map(m => <Message key={m.id} message={  m.message} url={ m.url }/> )

	let addSubmit = (values) => {
		props.sendMessage(values.newMessageBody);
		values.newMessageBody = null;
	}
	return (

		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					{ dialogsElements }
					
			</div>
			
			<div className={classes.messages}>
				{messagesElements}
			<MessagesReduxForm onSubmit={addSubmit} />
		</div>	
			
		</div>
	)
}
const MessagesForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field validate={[required,maxLenth40]}component={Textarea} placeholder='Enter your message' name='newMessageBody'  />
			<button >send message </button>
			</div>
	</form>
};

const MessagesReduxForm = reduxForm({ form: 'DialogAddMessagesForm' })(MessagesForm)

export default Dialogs;
