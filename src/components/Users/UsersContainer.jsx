import React from 'react';
import { connect } from 'react-redux';
import { followSucess, unfollowSucess, setCurrentPage, toogleIsFollowingProgress, getUsers,unfollow,follow} from '../../redux/usersReducer'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import { withAuthNavigator } from '../../hoc/withAuthNavigator';
import { getUsersSelector,getPageSize,getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress,getPortionSize} from '../../redux/usersSelectors'

import { compose } from 'redux';


class UsersComponent extends React.Component {

	componentDidMount() {
		const { currentPage, pageSize ,getUsers} = this.props;
		getUsers(currentPage,pageSize)
	};
	onPageChanged = (pageNumber) => {
		const {setCurrentPage,getUsers,pageSize} = this.props
		setCurrentPage(pageNumber)
		getUsers(pageNumber,pageSize)
	};
	
	render() {

		return <>
		{ this.props.isFetching ? <Preloader /> : null }
			<Users
				
				totalItemsCount={this.props.totalItemsCount}
				pageSize={this.props.pageSize}
				pages={this.props.pages}
				onPageChanged={this.onPageChanged}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				followingInProgress={this.props.followingInProgress}
				portionSize={this.props.portionSize}
				/>
				
			</>
	};
};

let mapStateToProps = (state) => ({
	users: getUsersSelector(state),
	pageSize: getPageSize(state),
	totalItemsCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state),
	portionSize: getPortionSize(state),

});


export default compose(
	withAuthNavigator,
	connect(mapStateToProps, {
	followSucess, unfollowSucess, setCurrentPage,
	toogleIsFollowingProgress, getUsers, unfollow, follow})
)(UsersComponent)