import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReduсer'
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
	//let state = props.store.getState();

	//let addPost = () => {
	//	props.store.dispatch(addPostActionCreator());
	//}

	//let onPostChange = (text) => {
	//	let action = updateNewPostTextActionCreator(text);
	//	props.store.dispatch(action);
	
	return (
		<StoreContext.Consumer>
			{
			(store) => {
				let state = store.getState();
				let addPost = () => {
					store.dispatch(addPostActionCreator());
				}

				let onPostChange = (text) => {
					let action = updateNewPostTextActionCreator(text);
					store.dispatch(action);
				}
				return <MyPosts addPost={addPost}
					updateNewPostText={onPostChange}
					postsData={state.profilePage.postsData}
					newPostText={state.profilePage.newPostText} />
			}
		}
		</StoreContext.Consumer>
	)
}
export default MyPostsContainer;