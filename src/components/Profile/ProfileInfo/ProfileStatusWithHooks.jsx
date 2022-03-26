import React, { useState, useEffect } from 'react';
import classes from '../Profile.module.css'

const ProfileStatusWithHooks = ({status,updateUserStatus}) => {
	
	let [editMode, setEditMode] = useState(false);
	let [statusLocal, setStatus] = useState(status);

	useEffect(() => {
		setStatus(status);
	}, [status]);
	
	const activateEditMode = () => {
		setEditMode(true);
	};
	const deActivateEditMode = () => {
		setEditMode(false);
		updateUserStatus(statusLocal);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	};
	
		return <>
			{! editMode &&
				<div>
				<span onDoubleClick={activateEditMode} className={classes.status}>{status}</span>
				</div>}
			{editMode &&
				<div>
				<input onChange={ onStatusChange } onBlur={deActivateEditMode} value={statusLocal} autoFocus={true} />
				</div>}
				</>
};

export default ProfileStatusWithHooks;