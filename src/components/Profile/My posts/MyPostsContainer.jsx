
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReduсer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
/*const MyPostsContainer = (props) => {
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
*/

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (text) => {
					dispatch(updateNewPostTextActionCreator(text));
		},
	};
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer;