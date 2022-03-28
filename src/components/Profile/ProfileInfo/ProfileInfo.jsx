
import classes from '../Profile.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile,savePhoto,isOwner,saveProfile,status,updateUserStatus}) => {
	let [editMode, setEditMode] = useState(false);	
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}
	
	if (!profile) {
		return <Preloader />
	}
	const onSubmit = (formData) => {
		saveProfile(formData)
		setEditMode(false);
	} 
	return (
		
	<div>
			<div>
				<img className={ classes.walpapper } alt='not found' src='https://static-sl.insales.ru/images/products/1/328/193446216/11-019_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA_%D1%87%D0%B1.jpg' />
			</div>
			
		<div className={classes.myInfo}>
			<div className={classes.avatarWrapper}>
				{<img className={classes.avatar} alt='not found' src={profile.photos.large != null ? profile.photos.large : 'https://pixy.org/src/9/93394.png'} />}
			<span className={classes.fileInput}>{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</span>
			</div>
			{editMode ?
					<ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
				<ProfileData status={status} updateUserStatus={updateUserStatus} profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
				
		</div>
	</div>
	)
}

export const Contact = ({contactTitle,contactValue }) => {
	return <div><b>{contactTitle}:</b>{contactValue}</div>
} 
const ProfileData = ({ profile, isOwner, goToEditMode,updateUserStatus,status}) => {
	return <div className={classes.aboutMySelf}>
		{isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
		
			<div>
				<div>
					<b>Full name:</b> <span className={classes.fullName}>{profile.fullName} </span>
				</div>
				<div>
					<b>status:</b> <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
				</div>
				<div>
					<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
				</div>
					{profile.lookingForAJob &&
						<div>
							<b>My professional skills:</b> {profile.lookingForAJobDescription}
						</div>
					}
					<div>
						<b>About Me:</b> { profile.aboutMe}
					</div>
					<div>
						<b>Contacts:</b> {Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> } )}
					</div>
					</div>
				</div>
}

export default ProfileInfo;