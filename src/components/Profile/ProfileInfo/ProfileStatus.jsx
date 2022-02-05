import React from 'react';
import { updateUserStatus } from '../../../redux/profilePageReduсer';
import classes from '../Profile.module.css'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	};
	onChangeStatus = (e) => {
		this.setState({
			status: e.currentTarget.value
		})	
	};
	activateEditMode = () => {
		this.setState({
			editMode: true,
			statusText: null,
		})
	};
	deactivateEditMode = () => {
		this.setState({
				editMode: false,
		})
		this.props.updateUserStatus(this.state.status);
	};

	render() {
		return <>
			{!this.state.editMode &&
				<div>
				<span className={ classes.status }onDoubleClick={this.activateEditMode} >{this.props.status || 'status not found'}</span>
				</div>}
			{this.state.editMode &&
				<div>
				<input onChange={ this.onChangeStatus }autoFocus='true' onBlur={this.deactivateEditMode } value={this.state.status} />
				</div>}
				</>
	};
};

export default ProfileStatus;