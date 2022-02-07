import React from 'react';
import styles from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.FormControls + ' ' + (hasError ? styles.error : '' )} >
			<div>
				<textarea {...input}{...props} />
				</div>
			{ hasError && <span>some error</span>}
			
		</div>
	)
};
