import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


	let postsElements =
		props.postsData.map(p => <Post src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />)
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
					{ postsElements }
				</div>
		  </div>
			)
	}


export default MyPosts;