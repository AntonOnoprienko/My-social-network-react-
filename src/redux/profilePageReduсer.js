import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_STATUS = "GET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

let initialState = {
  postsData: [
    {
      id: 1,
      name: "Arthur Onoprienko",
      message: "Всем привет я тут новенький!!",
      url: "https://www.blast.hk/attachments/68493/",
      likeCount: 5,
    },
    {
      id: 2,
      name: "Denis Titov",
      message: "Я качаю банки как зверь!",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      likeCount: 0,
    },
    {
      id: 3,
      name: "Daria Onoprienko",
      message: "Будешь ехать домой, купи чипсиков!",
      url: "https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg",
      likeCount: 83,
    },
    {
      id: 4,
      name: "Ksenia Gulchinskaya",
      message: "Я опаздываю на работу",
      url: "https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png",
      likeCount: 12,
    },
    {
      id: 5,
      name: "Anton Taran",
      message: "Тебе еду сегодня привозить?",
      url: "https://download-cs.net/steam/avatars/3434.jpg",
      likeCount: 72,
    },
    {
      id: 6,
      name: "Vitalii Shmatko",
      message: "Это будет собачья вписка",
      url: "https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg",
      likeCount: 23,
    },
    {
      id: 7,
      name: "Vitalii Shmatko",
      message: "Вы же прийдете?",
      url: "https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg",
      likeCount: 2,
    },
    {
      id: 8,
      name: "Denis Titov",
      message: "Я точно буду!",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      likeCount: 0,
    },
    {
      id: 9,
      name: "Denis Titov",
      message: "Залетайте в Titov Gym!",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      likeCount: 441,
    },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReduсer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 9,
        name: "Anton Onoprienko",
        message: state.newPostText,
        url: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png",
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case GET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getStatus = (status) => ({
  type: GET_USER_STATUS,
  status,
});
export const updateStatus = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(getStatus(response.data));
    });
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.result === 0) {
        dispatch(getStatus(status));
      }
    });
  };
};

export default profileReduсer;
