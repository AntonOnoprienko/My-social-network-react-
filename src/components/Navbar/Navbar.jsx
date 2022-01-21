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
				<div className={classes.friends}>
				  <NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item } >USERS</NavLink>
			</div>
			<div className={classes.friendsIcons}>
			<NavLink to='#'><Friends name='Arthur' url='https://www.blast.hk/attachments/68493/' /></NavLink>
			<NavLink to='#'><Friends name='Denis' url='https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png' /></NavLink>
			<NavLink to='#'><Friends name='Vitalii' url='https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' /></NavLink> 
			</div>
</nav>
	)
}


export default Navbar;

		  
