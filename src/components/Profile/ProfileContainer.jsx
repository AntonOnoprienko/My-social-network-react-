import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile , getUserStatus, updateUserStatus} from '../../redux/profilePageReduсer';
import { useParams } from "react-router";
import { compose } from "redux";
import {withAuthNavigator} from './../../hoc/withAuthNavigator'

const withRouter = WrappedComponent => props => {
    const params = useParams();
    
    return (
        <WrappedComponent {...props} params={params}/>
    );
};

class ProfileContainer extends React.Component {
	
	componentDidMount() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = this.props.autorizedUserId;
		}
		
		this.props.getProfile(userId);
		this.props.getUserStatus(userId);
	};
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={ this.props.updateUserStatus}/>
		)
	}
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	autorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});


export default compose(
	withAuthNavigator,
	connect(mapStateToProps, {getProfile,getUserStatus,updateUserStatus}),
	withRouter,
	
)(ProfileContainer);