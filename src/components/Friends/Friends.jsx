import React from 'react'
import classes from './Friends.module.css'

export const Friends = (props) => {
	return (
		<div className={classes.icon}>
			<div className={classes.item}>
			
				<img src={ props.url }/>
				<div>{ props.name }</div>
			</div>
		</div>
	)
}
