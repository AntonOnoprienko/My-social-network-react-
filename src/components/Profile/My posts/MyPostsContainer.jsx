
import { addPost } from '../../../redux/profilePageReduсer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	}
};


const MyPostsContainer = connect(mapStateToProps, {addPost}  )(MyPosts)



export default MyPostsContainer;