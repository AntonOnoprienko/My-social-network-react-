import React from "react";
import classes from './Friends.module.css'


class Friends extends React.Component {
	
	render() {
		return <div>
			{
				this.props.users.map((f) => {
					return <div key={f.id}>
						<div className={classes.wrapper}>
							<div className={classes.sidebar}>
								<img alt='not found' className={classes.avatar} src={f.url} />

								<div className={classes.buttonfollow}>
									{f.followed
										? <button onClick={() => { this.props.unfollow(f.id); } }>Unfollow </button>
										: <button onClick={() => { this.props.follow(f.id); } }>Follow </button>}
								</div>
							</div>
							<div className={classes.userinfo}>
								<div className={classes.fullname}>{f.fullName}</div>
								<div className={classes.status}>{f.status}</div>
								<div className={classes.location}>
									<div>{f.location.city}</div>
									<div>{f.location.country}</div>
								</div>
							</div>
						</div>
					</div>
				})
			}
		</div>
	};
};

export default Friends;