import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import login from '../../assets/images/login.png'


const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src='https://pngimg.com/uploads/biohazard/biohazard_PNG59.png' />
			<div className={classes.loginBlock}>
				{props.isAuth ? <img onClick={props.logout} className={classes.loginAva} src={login} /> :
					<NavLink to='/login'><img className={classes.defaultLogo} src='https://cengage.force.com/resource/1607465003000/loginIcon' /> </NavLink>}
				
			</div>

		</header>
	)
}

		  

		  export default Header