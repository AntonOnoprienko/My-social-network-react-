const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Denis Titov",
      followed: true,
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      status: "Качаю банки",
      location: { city: Kharkiv, country: Ukraine },
    },
    {
      id: 2,
      fullName: "Daria Onoprienko",
      followed: true,
      url: "https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg",
      status: "Maturnety leave",
      location: { city: Kharkiv, country: Ukraine },
    },
    {
      id: 3,
      fullName: "Arthur Onoprienko",
      followed: true,
      url: "https://www.blast.hk/attachments/68493/",
      status: "Катаю в Battlefield5",
      location: { city: Kharkiv, country: Ukraine },
    },
    {
      id: 4,
      fullName: "Vitalii Shmatko",
      followed: false,
      url: "https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg",
      status: "Гуляю с собакой",
      location: { city: Kharkiv, country: Ukraine },
    },
  ],
};

const usersReduсer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export default usersReduсer;
