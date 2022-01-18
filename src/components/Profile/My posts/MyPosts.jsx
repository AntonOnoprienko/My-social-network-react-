import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';



const MyPosts = (props) => {
	

	let postsElements =
		props.postsData.map(p => <Post key={p.id} src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />);
	
	let addPostBody = () => {
		props.addPost();
	}

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text)
	}
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea onChange={ onPostChange } value={ props.newPostText}/>
				</div>
				<div>
					<button onClick={addPostBody}>Add Post</button>
				</div>
					{ postsElements }
				</div>
		  </div>
			)
	}

export default MyPosts;