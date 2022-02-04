import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile , getUserStatus, updateUserStatus} from '../../redux/profilePageReduсer';
import { useParams } from "react-router";
import { compose } from "redux";

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
			userId = 2;
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
	status:state.profilePage.status,
});


export default compose(
	connect(mapStateToProps, {getProfile,getUserStatus,updateUserStatus}),
	withRouter,
	//withAuthNavigator (Перевод на страницу Логин если пользователь не авторизирован)
)(ProfileContainer);