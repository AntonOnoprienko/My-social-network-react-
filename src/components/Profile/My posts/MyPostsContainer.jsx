import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReduсer'


const MyPosts = (props) => {


	let postsElements =
		props.postsData.map(p => <Post src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />);
	
	


	let addPost = () => {
		props.dispatch(addPostActionCreator())
		
	}
	let onPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewPostTextActionCreator(text))
	}
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea onChange={ onPostChange } value={ props.newPostText}/>
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