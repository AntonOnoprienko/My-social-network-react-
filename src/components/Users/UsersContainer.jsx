import React from 'react';
import { connect } from 'react-redux';
import { followSucess, unfollowSucess, setCurrentPage, toogleIsFollowingProgress, getUsers,unfollow,follow} from '../../redux/usersReducer'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';

import { compose } from 'redux';


class UsersComponent extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	};
	onPageChanged = (pageNumber) => {
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
				unfollow={this.props.unfollowSucess}
				follow={this.props.followSucess}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	};
};

let mapStateToProps = (state) => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	isFetching: state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress,

});


export default compose(
connect(mapStateToProps, {
	followSucess, unfollowSucess, setCurrentPage,
	toogleIsFollowingProgress, getUsers, unfollow, follow
}),
//withAuthNavigator (Перевод на страницу Логин если пользователь не авторизирован)
)(UsersComponent)





//let mapDispatchToProps = (dispatch) => {
//	return {
//		follow: (userId) => {
//			dispatch(followAC(userId))
//		},
//		unfollow: (userId) => {
//			dispatch(unfollowAC(userId))
//		},
//		setUsers: (users) => {
//			dispatch(setUsersAC(users))
//		},
//		setCurrentPage: (pageNumber) => {
//			dispatch(setCurrentPageAC(pageNumber))
//		},
//		setTotalUsersCount: (totalCount) => {
//			dispatch(setTotalUsersCountAC(totalCount))
//		},
//		toogleIsFetching: (isFetching) => {
//			dispatch(toogleIsFetchingAC(isFetching))
//		}
//	};
//}
