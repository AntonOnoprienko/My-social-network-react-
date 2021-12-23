import classes from '../Profile.module.css'


const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={ classes.walpapper } src='https://static-sl.insales.ru/images/products/1/328/193446216/11-019_%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA_%D1%87%D0%B1.jpg' />
			</div>

			<div className={ classes.myInfo }>
				<div>
					<img className={classes.avatar} src='https://bipbap.ru/wp-content/uploads/2019/07/Samye-prikolnye-kartinki-dlya-devochek-dlya-srisovki-na-bumagu-1.jpg' />
				</div>
				<div className={classes.aboutMySelf}>
					<ul>
						<li>Onoprienko</li>
				  		<li>Anton</li>
				  		<li>25.01.1988</li>
						<li>JavaScript Developer</li>
					</ul>
				</div>
			</div>
			</div>
	)
}



export default ProfileInfo;