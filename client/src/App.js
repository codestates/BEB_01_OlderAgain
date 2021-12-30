import './App.css';
import React, { useState } from 'react';
import Login from './views/login';
import Main from './views/main';
import Write from './views/write';
import SignUp from './views/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [user, setLoginUser] = useState({})
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Login setLoginUser={setLoginUser}/>} />
				<Route exact path='signup' element={<SignUp />} />
				{/* <Route path='/main' element={<Main />} exact /> */}

				<Route 
				exact path='/main' 
				element = {user && user._id ? <Main user={user} setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}
				/>

				<Route exact path='/write' element={<Write user={user} setLoginUser={setLoginUser}/>} exact />
				{/* <Route path='users/*' element={<Users />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
