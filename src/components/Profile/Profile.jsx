
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner}profile={props.profile} status={props.status} updateUserStatus={ props.updateUserStatus }/>
			
			<MyPostsContainer />
			
		  </div>
		  
			)
	}


export default Profile;