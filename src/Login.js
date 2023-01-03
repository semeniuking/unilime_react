import React, {useState} from 'react';
import './App.css';
// import {signupAction} from "./app/store/actions/AuthActions";
// import {connect, useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import PropTypes from "prop-types";

const BASIC_URL = 'http://dummy-api.d0.acom.cloud';

async function loginUser(credentials) {
	const EMAIL_ROUTE = `/api/auth/login?email=${credentials.email}&password=${credentials.password}`;
	return fetch(`${BASIC_URL}${EMAIL_ROUTE}`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}


function Login({setToken}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			email,
			password
		});
		await setToken(token);
		await navigate('/products');
	}

	return (
		<div className="login">
			<div className="container">
				<form className="form" onSubmit={handleSubmit}>
					<input
						onChange={event => setEmail(event.target.value)}
						type="email"
						className='email'
						placeholder='test@test.com'/>
					<input
						onChange={event => setPassword(event.target.value)}
						type="password"
						className='password'
						placeholder='enter your password'/>
					<button type="submit">submit</button>
				</form>
			</div>
		</div>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
}

export default Login;