import classes from './Profile.module.css';
import MyPosts from './My posts/MyPosts';


const Profile = () => {
	return (
		<div>
			  <div>
				<img className={ classes.walpapper } src='https://static-sl.insales.ru/images/products/1/328/193446216/11-019_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA_%D1%87%D0%B1.jpg' />
			  </div>

				<div>
				<img className={ classes.avatar } src='https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg' />
				  <p>Onoprienko</p>
				  <p>Anton</p>
				  <p>25.01.1988</p>
				  			<p>JavaScript Developer</p>
			</div>
			<MyPosts />
		  </div>
		  
			)
	}


export default Profile;