import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import { Friends } from '../Friends/Friends';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			  <div className={classes.item}>
				<NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item } >Profile</NavLink>
			  </div>
			  <div className={classes.item}>
				<NavLink to='/dialogs' className = { navData => navData.isActive ? classes.active : classes.item } >Messages</NavLink>
			  </div>
			  <div className={classes.item}>
				  <NavLink to='/news' className = { navData => navData.isActive ? classes.active : classes.item } >News</NavLink>
			  </div>
			  <div className={classes.item}>
				  <NavLink to='/music' className = { navData => navData.isActive ? classes.active : classes.item } >Music</NavLink>
			  </div>
			  <div className={classes.item}>
				  <NavLink to='/settings' className = { navData => navData.isActive ? classes.active : classes.item } >Settings</NavLink>
				</div>
				<div className={classes.users}>
				  <NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item } >USERS</NavLink>
			</div>
				<div className={classes.friends}>
				  <NavLink to='/friends' className = { navData => navData.isActive ? classes.active : classes.item } >FRIENDS</NavLink>
			</div>
			<div className={classes.friendsIcons}>
			 
			</div>
</nav>
	)
}


export default Navbar;

		  
