import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.dialogsData.map ( d => <DialogItem id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = props.messagesData.map ( m => <Message message={  m.message} url={ m.url }/> )
		
	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					{ dialogsElements }
			</div>
			

			<div className= {classes.messages }>
					{ messagesElements }
				</div>
		</div>
	)
}

export default Dialogs;
