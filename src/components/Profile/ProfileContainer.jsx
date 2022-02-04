import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from '../../redux/profilePageReduсer';
import { useParams } from "react-router";
import {withAuthNavigator} from '../../hoc/withAuthNavigator'
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
	};
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});


export default compose(
	connect(mapStateToProps, {getProfile}),
	withRouter,
	//withAuthNavigator (Перевод на страницу Логин если пользователь не авторизирован)
)(ProfileContainer);