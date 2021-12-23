import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
				
				<Post src='http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' name='Arthur Onoprienko'message='Всем привет я тут новенький!!' likesCount='23'/>
				<Post src='https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' name='Vitalii Shmatko' message='Это будет собачья вписка' likesCount='0' />
				<Post src='https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png' name='Denis TitovGym'message='Приходите качать банки!' likesCount='3' />
				<Post src='https://www.meme-arsenal.com/memes/943b2cfb8850675319679ce91ebc5609.jpg' name='Ksenia Gulchinskaya' message='it is very nice'likesCount='0' />
				<Post src='https://shapka-youtube.ru/wp-content/uploads/2021/04/prikolnaya-avatarka.jpg' name='Пуцькис Onoprienko'message='I am happy' likesCount='0'/>
				<Post src='https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg' name='Пуцька Onoprienko'message='Будешь ехать домой, купи чипсиков!' likesCount='738'/>
				
			  </div>
		  </div>
			)
	}


export default MyPosts;