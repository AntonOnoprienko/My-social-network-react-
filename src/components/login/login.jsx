import React from 'react';
import { connect } from 'react-redux';
import { LoginReduxForm } from './LoginForm';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router';

const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememverMe);
	};
	
	if (props.isAuth) {
		
		return <Navigate replace to="/profile" />;
	};

	return <div>
		<h1>LOGIN for testing: onoprienkoanton88@gmail.com</h1>
		<LoginReduxForm onSubmit={ onSubmit }/>
  </div>;
};

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);