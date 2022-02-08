import React from 'react';
import { reduxForm , Field} from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../utils/validators/validators';

let maxLength20 = maxLenghtCreator(20);

 const LoginForm = (props) => {
	 return <form onSubmit={props.handleSubmit}>
			<div>
			 <Field validate={[required,maxLength20]} component={Input} name={'login'} placeholder={'Login'} />
			</div>
			<div>
			 <Field validate={[required,maxLength20]} component={Input} name={'password'} placeholder={'Password'} />
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