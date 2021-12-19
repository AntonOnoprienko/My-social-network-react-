import classes from './Post.module.css';


const Post = (props) => {
	return (
		<div className={classes.item}>
			<div>
			 { props.name }
			</div>
			<img src={ props.src }/>
			{ props.message }
			<div>
				<span>Like</span>
			</div>
 		</div>
				
			)
	}

export default Post;