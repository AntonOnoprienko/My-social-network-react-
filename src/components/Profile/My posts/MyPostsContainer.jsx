
import { addPost } from '../../../redux/profilePageReduсer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostMessage) => dispatch(addPost(newPostMessage)),
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)



export default MyPostsContainer;