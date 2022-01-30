import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching } from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';


class UsersComponent extends React.Component {

	componentDidMount() {
		this.props.toogleIsFetching(true)
		axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true} ).then(response => {
			this.props.setUsers(response.data.items)
			//this.props.setTotalUsersCount(response.data.totalCount)
			this.props.toogleIsFetching(false)
		})
	};
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toogleIsFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials: true}).then(response => {
				this.props.setUsers(response.data.items)
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
			unfollow={ this.props.unfollow}
			follow={this.props.follow} />
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

	}
}





export default connect(mapStateToProps, {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching
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
