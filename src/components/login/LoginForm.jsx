import React from 'react';
import { reduxForm , Field} from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../utils/validators/validators';
import styles from '../Common/FormsControls/FormsControls.module.css'

let maxLength20 = maxLenghtCreator(40);


const LoginForm = ({handleSubmit,error}) => {
	
	return <form onSubmit={handleSubmit}>
		
			<div>
			 <Field validate={[required,maxLength20]} component={Input} name={'email'} placeholder={'email'} />
			</div>
			<div>
			 <Field validate={[required, maxLength20]} component={Input} type='password' name={'password'} placeholder={'Password'} />
			</div>
			<div>
				<Field component={'input'}  name={'rememberMe'}type={'checkbox'} /> remember me
		 </div>
		 {error && <div className={styles.formSummaryError}>
			 {error }
		  </div> }
			<div> 
			 <button>login</button>
			</div>
		</form>
 };
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm;