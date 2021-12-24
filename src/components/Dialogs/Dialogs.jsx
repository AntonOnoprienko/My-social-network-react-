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
	{ id: 1, name: 'Arthur Onoprienko', url:'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' },
	{ id: 2, name: 'Denis Titov', url:'https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png' },
	{ id: 3, name: 'Daria Onoprienko', url:'https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg' },
	{ id: 4, name: 'Swetlana  Lubaya', url:'https://f1.upet.com/A_r2u6uZhnxA_x.jpg' },
	{ id: 5, name: 'Ksenia Gulchinskaya', url:'https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png' },
	{ id: 6, name: 'Anton Taran', url:'https://download-cs.net/steam/avatars/3434.jpg' },
	{ id: 7, name: 'Vitalii Shmatko', url:'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' }
	];

	let messageData = [
	{	id: 1, message: 'Hi!', url:'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq'},
	{  id: 2, message: 'How is your life?', url:'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq'},
	{  id: 3, message: 'Hi, i am fine', url: 'https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg'},
	{  id: 4, message: 'What are you doing?', url:'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq'},
	{  id: 5, message: 'I want to go for a walk', url: 'https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg'},
	{  id: 6, message: 'Its good', url:'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq'}
	
	]
		return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
					<DialogItem id= {dialogsData[0].id} name= {dialogsData[0].name} url= { dialogsData[0].url } />
					<DialogItem id= {dialogsData[1].id} name= {dialogsData[1].name} url= { dialogsData[1].url } />
					<DialogItem id= {dialogsData[2].id} name= {dialogsData[2].name} url= { dialogsData[2].url } />
					<DialogItem id= {dialogsData[3].id} name= {dialogsData[3].name} url= { dialogsData[3].url } />
					<DialogItem id= {dialogsData[4].id} name= {dialogsData[4].name} url= { dialogsData[4].url } />
					<DialogItem id= {dialogsData[5].id} name= {dialogsData[5].name} url= { dialogsData[5].url } />
					<DialogItem id= {dialogsData[6].id} name= {dialogsData[6].name} url= { dialogsData[6].url } />
				
			</div>
			

			<div className= {classes.messages }>
				<Message message={  messageData[0].message} url={ messageData[0].url }/>
				<Message message={  messageData[1].message} url={ messageData[1].url }/>
				<Message message={  messageData[2].message} url={ messageData[2].url }/>
				<Message message={  messageData[3].message} url={ messageData[3].url }/>
				<Message message={  messageData[4].message} url={ messageData[4].url }/>
				<Message message={  messageData[5].message} url={ messageData[5].url }/>
				
				
			</div>
		</div>
	)
}

export default Dialogs;
