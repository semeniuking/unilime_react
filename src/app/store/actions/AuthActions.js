import {signUp} from '../../../services/AuthService';


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';

export function signupAction(email, password) {
	return (dispatch) => {
		signUp(email, password)
			.then((response) => response.json())
			.then((user) => {
				console.log(user)
				dispatch(confirmedSignupAction(user))
			})
	};
}

export function confirmedSignupAction(payload) {
	return {
		type: SIGNUP_CONFIRMED_ACTION,
		payload,
	};
}