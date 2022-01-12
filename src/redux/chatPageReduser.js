const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Denis Titov",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
    },
    {
      id: 2,
      name: "Arthur Onoprienko",
      url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
    },
    {
      id: 3,
      name: "Daria Onoprienko",
      url: "https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg",
    },
    {
      id: 4,
      name: "Swetlana  Lubaya",
      url: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg",
    },
    {
      id: 5,
      name: "Ksenia Gulchinskaya",
      url: "https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png",
    },
    {
      id: 6,
      name: "Anton Taran",
      url: "https://download-cs.net/steam/avatars/3434.jpg",
    },
    {
      id: 7,
      name: "Vitalii Shmatko",
      url: "https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg",
    },
  ],

  messagesData: [
    {
      id: 1,
      message: "Hi!",
      url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
    },
    {
      id: 2,
      message: "How is your life?",
      url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
    },
    {
      id: 3,
      message: "Hi, i am fine",
      url: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png",
    },
    {
      id: 4,
      message: "What are you doing?",
      url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
    },
    {
      id: 5,
      message: "I want to go for a walk",
      url: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png",
    },
    {
      id: 6,
      message: "Its good",
      url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
    },
  ],
  newMessageText: "",
};

const chatReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 0,
        name: "Anton Onoprienko",
        message: state.newMessageText,
        url: "https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png",
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
};
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export default chatReduser;
