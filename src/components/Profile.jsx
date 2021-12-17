import classes from './Profile.module.css';


const Profile = () => {
	return (
		<div className={classes.content}>
			  <div>
			  	<img className='walpapper' src='https://static-sl.insales.ru/images/products/1/328/193446216/11-019_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA_%D1%87%D0%B1.jpg' />
			  </div>

				<div>
				  <img className='avatar' src='https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg' />
				  <p>Onoprienko</p>
				  <p>Anton</p>
				  <p>25.01.1988</p>
				  			<p>JavaScript Developer</p>
			  </div>
			<div className={classes.posts}>
				  My posts
				  <div >
					  New post 
				</div>
				<div className={classes.item}>
					  Post1
 					</div>
				<div className={classes.item}>
					  Post2
				  </div>
			  </div>
		  </div>
			)
	}


export default Profile;