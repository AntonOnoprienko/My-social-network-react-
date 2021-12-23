import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
				<div className = { classes.dialog }>
					<NavLink to ="/dialogs/1" >Arthur Onoprienko</NavLink>
				</div>
				<div className = {classes.dialog} >
					<NavLink to ='/dialogs/2' >Vitalii Shmatko</NavLink>
				</div>
				<div className = { classes.dialog }>
					<NavLink to ='/dialogs/3' >Daria ♥ Onoprienko</NavLink>
				</div>
				<div className = { `${classes.dialog} + ${classes.active } `}>
					<NavLink to ='/dialogs/4' >Denis TitovGym</NavLink>
				</div>
				<div className = { classes.dialog }>
					<NavLink to ='/dialogs/5' >Swetlana Lubaya</NavLink>
				</div>
				<div className = { classes.dialog }>
					<NavLink to ='/dialogs/6' >Ksenya Gulchinskaya</NavLink>
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