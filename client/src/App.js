import './App.css';
import React from 'react';
import Login from './views/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				{/* <Route path='users/*' element={<Users />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
