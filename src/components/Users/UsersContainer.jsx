import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching ,toogleIsFollowingProgress} from '../../redux/usersReducer'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersComponent extends React.Component {

	componentDidMount() {
		this.props.toogleIsFetching(true)
		usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
			this.props.setUsers(data.items)
			//this.props.setTotalUsersCount(response.data.totalCount)
			this.props.toogleIsFetching(false)
		})
	};
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toogleIsFetching(true)
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.setUsers(data.items)
				this.props.toogleIsFetching(false)
			})
	};
	
	render() {
		
		
		
		return <>
			{this.props.isFetching ? <Preloader/> : null }
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
				followingProgress={this.props.followingInProgress}
				isFetching ={this.props.isFetching}
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
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching,toogleIsFollowingProgress
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
