import React, { useState } from 'react';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
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
		</>
	);
};

export default Login;
