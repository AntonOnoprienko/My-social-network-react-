import React from 'react';
import { reduxForm , Field} from 'redux-form';

 const LoginForm = (props) => {
	 return <form onSubmit={props.handleSubmit}>
			<div>
			 <Field component={'input'} name={'login'} placeholder={'Login'} />
			</div>
			<div>
				<Field component={'input'} name={'password'} placeholder={'Password'} />
			</div>
			<div>
				<Field component={'input'}  name={'rememberMe'}type={'checkbox'} /> remember me
			</div>
			<div>
				<button>login</button>
			</div>
		</form>
 };
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm;