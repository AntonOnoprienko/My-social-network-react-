import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,	
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
	};
	updateStatusText = (e) => {
	
	}
	render() {
		return <>
			{!this.state.editMode &&
				<div>
				<span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
				</div>}
			{this.state.editMode &&
				<div>
				<input autoFocus='true' onBlur={this.deactivateEditMode } value={this.props.status} />
				</div>}
				</>
	};
};

export default ProfileStatus;