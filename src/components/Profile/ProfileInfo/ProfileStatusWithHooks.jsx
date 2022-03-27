import React, { useState, useEffect } from 'react';
import classes from '../Profile.module.css'

const ProfileStatusWithHooks = (props) => {
	
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);
	
	const activateEditMode = () => {
		setEditMode(true);
	};
	const deActivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	};
	
		return <>
			{! editMode &&
				<div>
				<span onDoubleClick={activateEditMode} className={classes.status}>{props.status}</span>
				</div>}
			{editMode &&
				<div>
				<input onChange={ onStatusChange } onBlur={deActivateEditMode} value={status} autoFocus={true} />
				</div>}
				</>
};

export default ProfileStatusWithHooks;