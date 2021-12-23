import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const onClickBtn = async (e) => {
		await axios
			.post('http://localhost:8000/login', {
				name: userName,
				password: password,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className='userName'>
				아이디
				<input
					type='text'
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
					className='userName'></input>
			</div>
			<div>
				<div className='password'>
					비밀번호
					<input
						type='text'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='password'
					/>
				</div>
			</div>
			<div>
				<input
					type='button'
					value='login'
					className='login'
					onClick={onClickBtn}></input>
			</div>
		</>
	);
};

export default Login;
