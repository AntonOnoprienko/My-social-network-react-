import React from "react";
import classes from '../Profile.module.css';
import { Contact } from '../ProfileInfo/ProfileInfo'
import { createField, Input, Textarea } from '../../Common/FormsControls/FormsControls'
import { reduxForm } from "redux-form";


const ProfileDataForm = ({profile,goToEditMode,placeholder, name, validators, component,}) => {
	return <form>
	
	

<div className={classes.aboutMySelf}>
			{<div><button onClick={() => { }}>save</button></div>}
					<div>
						<div>
							<b>Full name:</b> {createField('Full Name','fullName', [], Input)}
						</div>
						<div>
							<b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, {type:'checkbox'})}
						</div>
						<div>
							<b>My professional skills:</b> {createField('Prof skills','lookingForAJobDescription', [], Textarea)}
						</div>
						
						<div>
							<b>About Me:</b> {createField('About Me','aboutMe', [], Textarea)}
						</div>
						<div>
							<b>Contacts:</b> {Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> } )}
						</div>
					</div>
				</div>

		
		</form>
}
const ProfileReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);
export default ProfileReduxForm;