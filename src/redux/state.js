import { rerenderEtireTree } from "../render";

let state = {
  chatPage: {
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
        url: "https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg",
      },
      {
        id: 4,
        message: "What are you doing?",
        url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
      },
      {
        id: 5,
        message: "I want to go for a walk",
        url: "https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg",
      },
      {
        id: 6,
        message: "Its good",
        url: "http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq",
      },
    ],
  },
  profilePage: {
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
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 9,
    name: "Anton Onoprienko",
    message: postMessage,
    url: "https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg",
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEtireTree(state);
};

export let addMessage = (textMessage) => {
  let newMessage = {
    id: 0,
    name: "Anton Onoprienko",
    message: textMessage,
    url: "https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg",
  };
  state.chatPage.messagesData.push(newMessage);
  rerenderEtireTree(state);
};
export default state;
