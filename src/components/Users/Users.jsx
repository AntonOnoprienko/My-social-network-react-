import React from "react"
import classes from './Users.module.css'
import userPhoto from '../../assets/images/Usericon.png'
import { NavLink } from "react-router-dom"
import { usersAPI } from "../../api/api"

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		};
	return ( <div>
			<div className={ classes.pageNumbers}>
				{pages.map(p => { 
					
					return  <span onClick={(e) => {props.onPageChanged(p)} } className={ props.currentPage  === p && classes.selectedPage }>{p}</span>
				}) }
				</div>
			{
					props.users.map((u) => <div key={u.id}>
				<div className={ classes.wrapper}>
							<div className={classes.sidebar}>
								<NavLink to={'/profile/' +u.id}><img className={classes.avatar} src={u.photos.small != null ? u.photos.small : userPhoto } /></NavLink>
						<div className={classes.buttonfollow}>
									{u.followed
										? <button onClick={() => {
											usersAPI.unfollowUser(u.id).then(data => {
												if (data.resultCode === 0) { props.unfollow(u.id) }})
										}} >Unfollow </button>
										: <button onClick={() => {
											usersAPI.followUser(u.id).then(data => {
												if (data.resultCode === 0) { props.follow(u.id) }})
										}} >Follow </button>
									}
								</div>
					</div>
					<div className={ classes.userinfo}>
						<div className={ classes.fullname}>{u.name}</div>
						<div className={ classes.status}>{ u.status}</div>
						<div className={ classes.location}>
							<div>{' u.location.city'},</div>
							<div>{' u.location.country'}</div>
						</div>
					</div>
				</div>
			</div>)
		}
		</div>
	)
}

export default Users;