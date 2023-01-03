export function signUp(email, password) {
	const BASIC_URL = 'http://dummy-api.d0.acom.cloud';
	const EMAIL_ROUTE = `/api/auth/login?email=${email}&password=${password}`
	const postData = {
		email,
		password
	}
	const optionsPost = {
		method: 'POST',
		headers: new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify(postData)
	};
	return fetch(`${BASIC_URL}${EMAIL_ROUTE}`, optionsPost)
}