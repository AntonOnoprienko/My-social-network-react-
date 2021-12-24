import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
	let postsData = [
		{ id: 1, name: 'Arthur Onoprienko', message: 'Всем привет я тут новенький!!', url: 'https://www.blast.hk/attachments/68493/', likeCount: 5 },
		{ id: 2, name: 'Denis Titov', message: 'Я качаю банки как зверь!', url: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png', likeCount: 0 },
		{ id: 3, name: 'Daria Onoprienko', message: 'Будешь ехать домой, купи чипсиков!', url: 'https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg', likeCount: 83 },
		{ id: 4, name: 'Ksenia Gulchinskaya', message: 'Я опаздываю на работу', url: 'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png', likeCount: 12 },
		{ id: 5, name: 'Anton Taran', message: 'Тебе еду сегодня привозить?', url: 'https://download-cs.net/steam/avatars/3434.jpg', likeCount: 72 },
		{ id: 6, name: 'Vitalii Shmatko', message: 'Это будет собачья вписка', url: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg', likeCount: 23 },
		{ id: 7, name: 'Vitalii Shmatko', message: 'Вы же прийдете?', url: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg', likeCount: 2 },
		{ id: 8, name: 'Denis Titov', message: 'Я точно буду!', url: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png', likeCount: 0 },
	];

	let postsElements = postsData.map (p => <Post src={p.url } name={p.name } message={p.message } likesCount={p.likeCount } />)
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
					{ postsElements }
				</div>
		  </div>
			)
	}


export default MyPosts;