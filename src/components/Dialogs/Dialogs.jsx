import classes from './Dialogs.module.css'


const Dialogs = (props) => {
	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
				<div className = { classes.dialog }>
					Arthur Onoprienko
				</div>
				<div className = {classes.dialog} >
					Vitalii Shmatko
				</div>
				<div className = { classes.dialog }>
					Daria ♥ Onoprienko
				</div>
				<div className = { `${classes.dialog} + ${classes.active } `}>
					Denis TitovGym
				</div>
				<div className = { classes.dialog }>
					Swetlana Lubaya
				</div>
				<div className = { classes.dialog }>
					Ksenya Gulchinskaya
				</div>
			</div>
			<div className= {classes.messages }>
				<div className= { classes.message }>Hi!</div>
			<div className= { classes.message }>How is yours?</div>
			<div className= { classes.message }>Fine!</div>
			</div>
		</div>
	)
}

export default Dialogs;