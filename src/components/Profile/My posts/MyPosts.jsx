import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {


	let postsElements =
		props.postsData.map(p => <Post src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />);
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' })
		
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: 'UPDATE-NEW_POST-TEXT', newText: text })
	}
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea onChange={ onPostChange }ref={newPostElement} value={ props.newPostText}/>
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