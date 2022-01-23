import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/Usericon.png'

class Users extends React.Component {
	constructor(props) {
		super(props);
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items)
		});
	};
	render() {
		return <div>
		{
			this.props.users.map((u) => <div key={u.id}>
				<div className={ classes.wrapper}>
					<div className={ classes.sidebar}>
						<img className={classes.avatar} src={u.photos.small != null ? u.photos.small : userPhoto } />
						
						<div className={classes.buttonfollow}>
							{u.followed
								? <button onClick={() => { this.props.unfollow(u.id) }} >Unfollow </button>
								: <button onClick={() => { this.props.follow(u.id) }} >Follow </button>
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
	
	
};

		


export default Users;