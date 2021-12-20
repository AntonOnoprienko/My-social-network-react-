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
				<span>like </span> { props.likesCount } 
			</div>
 		</div>
				
			)
	}

export default Post;