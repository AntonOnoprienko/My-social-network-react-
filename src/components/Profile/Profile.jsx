import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={ props.updateNewPostText }></MyPosts>
		  </div>
		  
			)
	}


export default Profile;