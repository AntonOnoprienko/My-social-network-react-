import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/Usericon.png'

class Users extends React.Component {

	componentDidMount() {
		axios.get( "https://social-network.samuraijs.com/api/1.0/users?page3&count=100" ).then(response => {
			this.props.setUsers(response.data.items)
		})
	};
	render() {
		let pagesCount = this.props.totalUsersCount / this.props.pageSize
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		};
		return <div>
				<div>
				{pages.map(p => {
					return <span>{p}</span>
				})}
				</div>
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