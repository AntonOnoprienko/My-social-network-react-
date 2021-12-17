import classes from './Navbar.module.css'


const Navbar = () => {
	return (
		<nav className={classes.nav}>
			  <div>
				<a href='#' className={classes.item}>Profile</a>
			  </div>
			  <div>
				  <a href='#' className={classes.item}>Messages</a>
			  </div>
			  <div>
				  <a href='#' className={classes.item}>News</a>
			  </div>
			  <div>
				  <a href='#' className={classes.item}>Music</a>
			  </div>
			  <div>
				  <a href='#' className={classes.item}>Settings</a>
			  </div>
</nav>
	)
}


export default Navbar;

		  
