import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

let maxLengt30 = maxLenghtCreator(30)

const MyPosts = React.memo(props => {
	
	let postsElements =
		props.postsData.map(p => <Post key={p.id} src={p.url} name={p.name} message={p.message} likesCount={p.likeCount} />);
	
	let addPostText = (value) => {
		props.addPost(value.newPostMessage);
		value.newPostMessage = null;
	}

	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<PostsReduxForm onSubmit={addPostText} />
				{postsElements}
			</div>
		</div>
	)
});
export default MyPosts;


const PostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field validate={[required, maxLengt30]} component={Textarea} placeholder='Enter your post text' name='newPostMessage' />
		</div>
		<div>
			<button >Add Post </button>
		</div>
	</form>
};

const PostsReduxForm = reduxForm({ form: 'ProfileAddPostForm' })(PostForm)