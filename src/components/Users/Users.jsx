import React from "react";
import classes from './Users.module.css'


const Users = (props) => {
	
	return <div>
		{
			props.users.map((u) => <div key={u.id}>
				<div className={ classes.wrapper}>
					<div className={ classes.sidebar}>
						<img className={classes.avatar} src={u.url} />
						
						<div className={classes.buttonfollow}>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }} >Unfollow </button>
								: <button onClick={() => { props.follow(u.id) }} >Follow </button>
							}
						</div>
					</div>
					<div className={ classes.userinfo}>
						<div className={ classes.fullname}>{u.fullName}</div>
						<div className={ classes.status}>{ u.status}</div>
						<div className={ classes.location}>
							<div>{ u.location.city},</div>
							<div>{ u.location.country}</div>
						</div>

					</div>
				</div>



			</div>)
		}
		</div>
};

export default Users;