import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/helper/objectsHelper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  portionSize: 10,
};

const usersReduсer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
export const followSucess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toogleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toogleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toogleIsFetching(true));
  let response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(toogleIsFetching(false));
};

export const followUnfollowFlow = async (
  userId,
  dispatch,
  APIrequest,
  ActionCreator
) => {
  dispatch(toogleIsFollowingProgress(true, userId));
  let response = await APIrequest(userId);
  if (response.data.resultCode === 0) {
    dispatch(ActionCreator(userId));
  }
  dispatch(toogleIsFollowingProgress(false, userId));
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      userId,
      dispatch,
      usersAPI.unfollowUser.bind(usersAPI),
      unfollowSucess
    );
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      userId,
      dispatch,
      usersAPI.followUser.bind(usersAPI),
      followSucess
    );
  };
};
export default usersReduсer;
