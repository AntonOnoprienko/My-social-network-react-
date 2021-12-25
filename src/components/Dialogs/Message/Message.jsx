import classes from '../Dialogs.module.css'




const Message = (props) => {
	return (
		<div className={classes.message}><img src={ props.url }/>{ props.message }</div>
	)
}


export default Message;
