import React from "react"
import classes from './Users.module.css'
import userPhoto from '../../assets/images/Usericon.png'
import { NavLink } from "react-router-dom"
import Paginator from "./Paginator"

const Users = (props) => {
	<Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} pageNumbers={props.pageNumbers}/>
	
		props.users.map((u) => <div key={u.users} >
			<div className={classes.wrapper}>
				<div className={classes.sidebar}>
					<NavLink to={'/profile/' + u.id}><img className={classes.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt={'Sorry!'} /></NavLink>
					<div className={classes.buttonfollow}>
						{u.followed

							? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
								props.unfollow(u.id);
											
							}} >Unfollow </button>

							: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
								props.follow(u.id)
											
							}} >Follow </button>
						}
					</div>
				</div>
				<div className={classes.userinfo}>
					<div className={classes.fullname}>{u.name}</div>
					<div className={classes.status}>{u.status}</div>
					<div className={classes.location}>
						<div>{' u.location.city'},</div>
						<div>{' u.location.country'}</div>
					</div>
				</div>
			</div>
		</div>)
	
};
export default Users;