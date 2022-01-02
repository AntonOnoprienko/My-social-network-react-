import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {


	let postsElements =
		props.postsData.map(p => <Post src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />);
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text)
	}
	
	
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea ref={ newPostElement }></textarea>
				</div>
				<div>
					<button onClick={ addPost }>Add Post</button>
				</div>
					{ postsElements }
				</div>
		  </div>
			)
	}


export default MyPosts;