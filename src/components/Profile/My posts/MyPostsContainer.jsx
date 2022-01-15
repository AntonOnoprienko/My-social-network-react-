
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReduсer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		ProfilePage: state.profilePage
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		
		addPost: dispatch(addPostActionCreator()),
		updateNewPostText: updateNewPostTextActionCreator(text),
	}
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;