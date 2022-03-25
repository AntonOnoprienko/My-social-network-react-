
import classes from '../Profile.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

let ProfileInfo = (profile,...props) => {

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}
	
	if (!props.profile) {
		return <Preloader/>
	}
	
	return (
		
		<div>
			<div>
				<img className={ classes.walpapper } alt='not found' src='https://static-sl.insales.ru/images/products/1/328/193446216/11-019_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA_%D1%87%D0%B1.jpg' />
			</div>
			
			<div className={classes.myInfo}>
				
				<div className={classes.avatarWrapper}>
					{<img className={classes.avatar} alt='not found' src={props.profile.photos.large != null ? props.profile.photos.large : 'https://pixy.org/src/9/93394.png'} />}
					<span className={classes.fileInput}>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</span>
				</div>
				<div className={classes.aboutMySelf}>

					<div>
						<div>
							<b>Full name:</b> <span className={ classes.fullName}>{props.profile.fullName} </span>
						</div>
						<div>
							<b>status:</b> <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
						</div>
						<div>
							<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
						</div>
						{props.profile.lookingForAJob &&
							<div>
								<b>My professional skills:</b> {profile.lookingForAJobDescription}
							</div>
						}
						<div>
							<b>About Me:</b> { profile.aboutMe}
						</div>
						<div>
							<b>Contacts:</b> {Object.keys(profile.contacts).map(key => { return <Contact keyy={key} contactTitle={key} contactValue={profile.contacts[key]}/> } )}
						</div>
					</div>
					






					{/*<ul>
						<div className={ classes.fullName}> {props.profile.fullName}</div>
						<ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
						<br />
						<li>{ contacts.facebook}</li>
				  		<li>{ contacts.website}</li>
				  		<li>{ contacts.vk}</li>
				  		<li>{ contacts.twitter}</li>
				  		<li>{ contacts.instagram}</li>
				  		<li>{ contacts.youtube}</li>
				  		<li>{ contacts.github}</li>
				  		<li>{ contacts.mainLink}</li>
				  		<li>{ contacts.lookingForAJobDescription}</li>
						<li>{ contacts.aboutMe}</li>
					</ul>*/}
				</div>
			</div>
			</div>
	)
}

const Contact = ({contactTitle,contactValue }) => {
	return <div><b>{contactTitle}:</b>{contactValue}</div>
} 

export default ProfileInfo;