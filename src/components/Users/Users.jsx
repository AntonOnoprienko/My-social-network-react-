import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios'


const Users = (props) => {
	if (props.users.length === 0) {
		
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items)
		 })

	};

	
	return <div>
		{
			props.users.map((u) => <div key={u.id}>
				<div className={ classes.wrapper}>
					<div className={ classes.sidebar}>
						<img className={classes.avatar} src={u.photos.small} />
						
						<div className={classes.buttonfollow}>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }} >Unfollow </button>
								: <button onClick={() => { props.follow(u.id) }} >Follow </button>
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
};

export default Users;