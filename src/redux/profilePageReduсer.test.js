import profileReduсer from "./profilePageReduсer";
import { addPost, deletePost } from "./profilePageReduсer";

let state = {
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
};

it("length of posts should be icrement", () => {
  let action = addPost("text");
  let newState = profileReduсer(state, action);
  expect(newState.postsData.length).toBe(10);
});

it("new post message must be correct", () => {
  let action = addPost("bal bla");
  let newState = profileReduсer(state, action);
  expect(newState.postsData[0].message).toBe("bal bla");
});

it("amoutn of likcount must be zero", () => {
  let action = addPost();
  let newState = profileReduсer(state, action);
  expect(newState.postsData[0].likeCount).toBe(0);
});

it("url must be correct", () => {
  let action = addPost();
  let newState = profileReduсer(state, action);
  expect(newState.postsData[0].url).toBe(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/COA_of_Kharkiv_Oblast.svg/1200px-COA_of_Kharkiv_Oblast.svg.png"
  );
});

it("after deleting length posts must be decrement", () => {
  let action = deletePost(2);
  let newState = profileReduсer(state, action);
  expect(newState.postsData.length).toBe(8);
});

it("after deleting length posts shouldn't be decrement if id is't correct", () => {
  let action = deletePost(9898);
  let newState = profileReduсer(state, action);
  expect(newState.postsData.length).toBe(9);
});
