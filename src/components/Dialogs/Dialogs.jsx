import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
	return (
<div className = { classes.dialog }>
			<NavLink to={`/dialogs/${props.id}`}><img src={ props. url }/>{ props.name }</NavLink>
				</div>
	)
}

const Message = (props) => {
	return (
		<div className={classes.message}><img src={ props.url }/>{ props.message }</div>
	)
}

const Dialogs = (props) => {
	let dialogsData = [
		{ id: 1, name: 'Denis Titov', url:'https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png' },
		{ id: 2, name: 'Arthur Onoprienko', url:'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' },
		{ id: 3, name: 'Daria Onoprienko', url:'https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg' },
		{ id: 4, name: 'Swetlana  Lubaya', url:'https://f1.upet.com/A_r2u6uZhnxA_x.jpg' },
		{ id: 5, name: 'Ksenia Gulchinskaya', url:'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png' },
		{ id: 6, name: 'Anton Taran', url:'https://download-cs.net/steam/avatars/3434.jpg' },
		{ id: 7, name: 'Vitalii Shmatko', url:'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' }
	];
	
	let messageData = [
		{ id: 1, message: 'Hi!', url: 'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' },
		{ id: 1, message: 'Hi!', url: 'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' },
		{ id: 2, message: 'How is your life?', url: 'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' },
		{ id: 3, message: 'Hi, i am fine', url: 'https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg' },
		{ id: 4, message: 'What are you doing?', url: 'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' },
		{ id: 5, message: 'I want to go for a walk', url: 'https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg' },
		{ id: 6, message: 'Its good', url: 'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' }
	
	];

	let dialogsElements = dialogsData.map ( d => <DialogItem id= {d.id} name= {d.name} url= { d.url } />)
	let messagesElements = messageData.map ( m => <Message message={  m.message} url={ m.url }/> )
		
	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					{ dialogsElements }
			</div>
			

			<div className= {classes.messages }>
					{ messagesElements }
				</div>
		</div>
	)
}

export default Dialogs;
