import React from 'react';
import { connect } from 'react-redux';
import { followSucess, unfollowSucess, setCurrentPage, toogleIsFollowingProgress, getUsers,unfollow,follow} from '../../redux/usersReducer'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import { withAuthNavigator } from '../../hoc/withAuthNavigator';
import { getUsersSelector,getPageSize,getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors'

import { compose } from 'redux';


class UsersComponent extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	};
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	};
	
	render() {

		return <>
		{ this.props.isFetching ? <Preloader /> : null }
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				pages={this.props.pages}
				onPageChanged={this.onPageChanged}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	};
};

let mapStateToProps = (state) => ({
	users: getUsersSelector(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state),

});


export default compose(
	withAuthNavigator,
	connect(mapStateToProps, {
	followSucess, unfollowSucess, setCurrentPage,
	toogleIsFollowingProgress, getUsers, unfollow, follow})
)(UsersComponent)