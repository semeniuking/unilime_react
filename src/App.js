import './App.css';
import Login from "./Login";
import Products from "./Products";
import {Route, Routes,} from "react-router-dom";

function App() {
	const setToken = (userToken) => {
		localStorage.setItem('token', JSON.stringify(userToken));
	}

	const getToken = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.access_token
	}
	
	const token = getToken();

	if (!token) {
		return <Login setToken={setToken}/>
	}

	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Login setToken={setToken}/>}/>
				<Route path='/products' element={<Products  getToken={token}/>}/>
				{/*<Route path='/*' element={<Login/>}/>*/}
			</Routes>
		</div>
	);
}

export default App;
