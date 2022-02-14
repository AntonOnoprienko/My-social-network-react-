import React, { useState } from 'react';
import classes from '../Profile.module.css'

const ProfileStatusWithHooks = (props) => {
	let stateWithSetState = useState(false);
	let editMode = stateWithSetState[0];
	let setEditMode = stateWithSetState[1];
		return <>
			{! editMode &&
				<div>
				<span className={ classes.status }>{ '123' || 'status not found'}</span>
				</div>}
			{editMode &&
				<div>
				<input oautoFocus={true} />
				</div>}
				</>
};

export default ProfileStatusWithHooks;