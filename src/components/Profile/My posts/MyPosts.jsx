import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
	return (
		<div className={classes.content}>
			<div className={classes.posts}>
				<textarea></textarea>
				<button>Add Post</button>
				  <div >
					  New post 
				</div>
				<Post src='https://mena.org.ua/wp-content/uploads/2014/03/avatar.png' name='John 'message='Hello all!!'/>
				<Post src='https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' name='Steven' message='It is my first post'/>
				<Post src='https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png' name='Brayan 'message='I am using props '/>
				<Post src='https://www.meme-arsenal.com/memes/943b2cfb8850675319679ce91ebc5609.jpg' name='Dafna' message='it is very nice'/>
				<Post src='https://shapka-youtube.ru/wp-content/uploads/2021/04/prikolnaya-avatarka.jpg' name='Mark 'message='I am happy'/>
				
			  </div>
		  </div>
			)
	}


export default MyPosts;