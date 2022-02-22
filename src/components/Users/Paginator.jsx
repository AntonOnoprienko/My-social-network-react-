import React from "react"
import classes from './Users.module.css'


const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	};
	
	return (
		<div className={classes.pageNumbers}>
			{pages.map((p) => {
					
				return <span key={p.pages} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && classes.selectedPage}>{p}</span>
			})}
		</div>
	)
};

export default Paginator;