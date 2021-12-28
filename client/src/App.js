import './App.css';
import React from 'react';
import Login from './views/login';
import Main from './views/main';
import Write from './views/write';
import SignUp from './views/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} exact />
				<Route path='signup' element={<SignUp />} exact />
				<Route path='/main' element={<Main />} exact />
				<Route path='write' element={<Write />} exact />
				{/* <Route path='users/*' element={<Users />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
