
import classes from '../Profile.module.css'
import Preloader from '../../Common/Preloader/Preloader'


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div>
			<div>
				<img className={ classes.walpapper } src='https://static-sl.insales.ru/images/products/1/328/193446216/11-019_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA_%D1%87%D0%B1.jpg' />
			</div>

			<div className={ classes.myInfo }>
				<div>
					<img className={classes.avatar} src={ props.profile.photos.large}/>
				</div>
				<div className={classes.aboutMySelf}>
					<ul>
						<div>{ props.profile.fullName}</div>
						<li>{ props.profile.contacts.facebook}</li>
				  		<li>{ props.profile.contacts.website}</li>
				  		<li>{ props.profile.contacts.vk}</li>
				  		<li>{ props.profile.contacts.twitter}</li>
				  		<li>{ props.profile.contacts.instagram}</li>
				  		<li>{ props.profile.contacts.youtube}</li>
				  		<li>{ props.profile.contacts.github}</li>
				  		<li>{ props.profile.contacts.mainLink}</li>
				  		<li>{ props.profile.lookingForAJobDescription}</li>
						<li>{props.profile.aboutMe}</li>
					</ul>
				</div>
			</div>
			</div>
	)
}



export default ProfileInfo;