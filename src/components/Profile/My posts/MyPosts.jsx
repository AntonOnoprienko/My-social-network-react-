import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<textarea></textarea>
				<button>Add Post</button>
				  <div >
					  New post 
				</div>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				
			  </div>
		  </div>
			)
	}


export default MyPosts;