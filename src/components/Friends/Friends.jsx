import React from "react";
import classes from './Friends.module.css'


class Friends extends React.Component {
	render() {
		return <div>
			{
				this.props.users.map((u) => {
					return <div key={u.id}>
						<div className={classes.wrapper}>
							<div className={classes.sidebar}>
								<img className={classes.avatar} src={u.url} />

								<div className={classes.buttonfollow}>
									{u.followed
										? <button onClick={() => { this.props.unfollow(u.id); } }>Unfollow </button>
										: <button onClick={() => { this.props.follow(u.id); } }>Follow </button>}
								</div>
							</div>
							<div className={classes.userinfo}>
								<div className={classes.fullname}>{u.fullName}</div>
								<div className={classes.status}>{u.status}</div>
								<div className={classes.location}>
									<div>{u.location.city}</div>
									<div>{u.location.country}</div>
								</div>
							</div>
						</div>
					</div>;
				})
			};
		</div>
	};
};

export default Friends;