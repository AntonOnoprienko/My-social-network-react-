import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts postsData={props.profilePage.postsData} newPostText={ props.profilePage.newPostText } dispatch={ props.dispatch }></MyPosts>
		  </div>
		  
			)
	}


export default Profile;