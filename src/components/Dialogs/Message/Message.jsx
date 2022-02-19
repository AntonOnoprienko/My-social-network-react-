import classes from '../Dialogs.module.css'




const Message = (props) => {
	return (
		<div className={classes.message}><img alt='not found' src={ props.url }/>{ props.message }</div>
	)
}


export default Message;
