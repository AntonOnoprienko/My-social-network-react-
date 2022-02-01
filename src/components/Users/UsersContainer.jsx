import React from 'react';
import { connect } from 'react-redux';
import { followSucess, unfollowSucess, setCurrentPage, toogleIsFollowingProgress, getUsers,unfollow,follow} from '../../redux/usersReducer'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';


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
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				toogleIsFollowingProgress={this.props.toogleIsFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	};
};

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize:state.usersPage.pageSize,
		totalUsersCount:state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}





export default connect(mapStateToProps, {
	followSucess, unfollowSucess, setCurrentPage,toogleIsFollowingProgress,getUsers,unfollow,follow
})(UsersComponent);







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
