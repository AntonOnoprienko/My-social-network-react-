import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
	return (
<div className = { classes.dialog }>
			<img src={ props. url }/><NavLink to={'/dialogs/' + props.id}>{ props.name }</NavLink>
				</div>
	)
}

const Message = (props) => {
	return (
		<div className={classes.message}>{ props.message }</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className = { classes.dialogs } >
			<div className = {classes.dialogsItems }>
				<DialogItem url='http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq' id='1' name ='Arthur Onoprienko' />
				<DialogItem url='https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png' id='2' name ='Denis Titov' />
				<DialogItem url='https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg' id='3' name ='Daria Onoprienko' />
				<DialogItem url='https://f1.upet.com/A_r2u6uZhnxA_x.jpg' id='4' name ='Swetlana  Lubaya' />
				<DialogItem url='https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png' id='5' name ='Ksenia Gulchinskaya' />
				<DialogItem url='https://download-cs.net/steam/avatars/3434.jpg' id='6' name ='Anton Taran' />
				<DialogItem url='https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg' id='7' name ='Vitalii Shmatko' />
				
				
			</div>
			<div className= {classes.messages }>
				<Message message='Hello!'/>
				<Message message='Hi!'/>
				<Message message='How is yours?'/>
				<Message message='Fine! Tnx'/>
				<Message message='Mb u wanna go for a walk?'/>
				
			</div>
		</div>
	)
}

export default Dialogs;
