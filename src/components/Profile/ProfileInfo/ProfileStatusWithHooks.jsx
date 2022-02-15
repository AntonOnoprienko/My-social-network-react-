import React, { useState } from 'react';
import classes from '../Profile.module.css'

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	const activateEditMode = () => {
		setEditMode(true);
	}
	const deActivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status);
	}
	
	let [status, setStatus] = useState(props.status)
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	 }
	
		return <>
			{! editMode &&
				<div>
				<span  onDoubleClick={ activateEditMode }className={ classes.status }>{ status || 'status not found'}</span>
				</div>}
			{editMode &&
				<div>
				<input onChange={ onStatusChange } onBlur={deActivateEditMode} value={ status} autoFocus={true} />
				</div>}
				</>
};

export default ProfileStatusWithHooks;