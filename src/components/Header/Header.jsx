import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import login from '../../assets/images/login.png'


const Header = (props) => {
	return (
		<header className={classes.header}>
			<img alt='not found' src='https://pngimg.com/uploads/biohazard/biohazard_PNG59.png'/>
			<div className={classes.loginBlock}>
				{props.isAuth ? <img alt='not found' onClick={props.logout} className={classes.loginAva} src={login} /> :
					<NavLink to='/login'><img className={classes.defaultLogo} alt='not found' src='https://cengage.force.com/resource/1607465003000/loginIcon' /> </NavLink>}
				
			</div>

		</header>
	)
}

		  

		  export default Header