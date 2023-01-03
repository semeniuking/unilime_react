import {SIGNUP_CONFIRMED_ACTION} from "../actions/AuthActions";

const initialState = {
	auth:
		{
			access_token: '',
			expires_in: '',
			token_type: '',
			user: {},
		}
}


export function AuthReducer(state = initialState, action) {
	if (action.type === SIGNUP_CONFIRMED_ACTION) {
		return {
			...state,
			auth: action.payload,
		}
	}
	return state;
}
