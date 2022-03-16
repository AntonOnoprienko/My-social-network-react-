import React from "react"
import classes from './Users.module.css'
import userPhoto from '../../assets/images/Usericon.png'
import { NavLink } from "react-router-dom"

const User = ({user, followingInProgress, unfollow, follow}) => {
	
	
	return (
			<div className={classes.wrapper}>
				<div className={classes.sidebar}>
					<NavLink to={'/profile/' + user.id}><img className={classes.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt={'Sorry!'} /></NavLink>
					<div className={classes.buttonfollow}>
						{user.followed

							? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
							unfollow(user.id);
											
							}} >Unfollow </button>

							: <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
							follow(user.id)
											
							}} >Follow </button>
						}
					</div>
				</div>
				<div className={classes.userinfo}>
					<div className={classes.fullname}>{user.name}</div>
					<div className={classes.status}>{user.status}</div>
					<div className={classes.location}>
						<div>{' user.location.city'},</div>
						<div>{' user.location.country'}</div>
					</div>
				</div>
			</div>
		)
};
export default User;